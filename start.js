var couchbase = require('couchbase');
var cluster = new couchbase.Cluster(http://10.50.1.170:8091');
var manager = cluster.manager('xxxxx', 'xxxxx');
manager.listBuckets(function(_, info){
	info.forEach(function(bucket){
		console.log(bucket.name);
	});
});