var fs = require('fs');
var mkdirp = require('mkdirp');
var sha1 = require('sha1');

var es5 = require('./data-es5'),
    es6 = require('./data-es6'),
    es7 = require('./data-es7');

var hashes;
var new_hashes;

function writeTest(version, test, dest_path) {
    var test_file_path = dest_path + '/' + test.name.replace(/[\/()\[\]"'<>+-\.%* ]/gi, '_') + ".js";
    var test_exec = test.exec.toString();
    var hash = sha1(test_exec);

    var generate_test = false;

    if (hashes[version][test_file_path] != hash) {
	generate_test = true;
	if (test_file_path in hashes) {
	    console.log("test " + test_file_path + " contents has changed.");
	}
	else {
	    console.log("test " + test_file_path + " is new.");
	}
    }
    new_hashes[version][test_file_path] = hash;

    if (generate_test) {
	var test_contents = '';
	test_contents += '// ' + test.name + '\n';
	test_contents += "if (typeof global === 'undefined') { var global = {}; }\n";
	test_contents += "global.__createIterableObject = function (arr, methods) {    methods = methods || {};    if (typeof Symbol !== 'function' || !Symbol.iterator)      return {};    arr.length++;    var iterator = {      next: function() {        return { value: arr.shift(), done: arr.length <= 0 };      },      'return': methods['return'],      'throw': methods['throw']    };    var iterable = {};    iterable[Symbol.iterator] = function(){ return iterator; };    return iterable;  }\n";
	test_contents += 'var test = ' + test_exec.replace(/\/\*/, ' ').replace(/\*\//, ' ') + ';\n';
	test_contents += 'console.log(test())';
	console.log("writing test " + test_file_path);
	mkdirp.sync(dest_path);
	fs.writeFileSync(test_file_path, test_contents);
    }
}

function handleTest(version, prefix, test) {
    if (test.exec) {
	writeTest(version, test, prefix);
    }

    if (test.subtests) {
	var p = prefix + '/' + test.name.replace(/[\/()"\[\]'<>+-\.%* ]/gi, '_');
	for (var st = 0, ste = test.subtests.length; st < ste; st ++) {
	    handleTest(version, p, test.subtests[st]);
	}
    }
}

function readHashes() {
    function read_hash_json(version) {
	try {
	    return JSON.parse(fs.readFileSync('ejs-tests/' + version + '-hashes.json'));
	}
	catch (e) {
	    return Object.create(null);
	}
    }

    hashes     = Object.create(null);
    hashes.es5 = read_hash_json('es5');
    hashes.es6 = read_hash_json('es6');
    hashes.es7 = read_hash_json('es7');

    new_hashes     = Object.create(null);
    new_hashes.es5 = Object.create(null);
    new_hashes.es6 = Object.create(null);
    new_hashes.es7 = Object.create(null);
}

function writeHashes() {
    function write_hash_json(version, data) {
	fs.writeFileSync('ejs-tests/' + version + '-hashes.json', JSON.stringify(data, null, ' '));
    }

    write_hash_json('es5', new_hashes.es5);
    write_hash_json('es6', new_hashes.es6);
    write_hash_json('es7', new_hashes.es7);
}

function handleTests() {
    function handle_tests(version, tests) {
	tests.forEach(function(test) { handleTest(version, 'ejs-tests/' + version, test); });
    }

    handle_tests('es5', es5.tests);
    handle_tests('es6', es6.tests);
    handle_tests('es7', es7.tests);
}

readHashes();
handleTests();
writeHashes();
