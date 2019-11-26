/**
QX：
https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body

QX MITM = api.termius.com
*/

var body = $response.body;
var obj = JSON.parse(body);
obj["proEndDate"] = "2099-01-01T00:00:00.000+0000";
obj["needSubscribe"] = false;
obj["pro"] = true;
$done({ body: JSON.stringify(obj) });

/**
 * @supported 97461E4A
 */
