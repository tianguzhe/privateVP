/**
QX：
https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ url script-response-body

QX MITM = api.termius.com
*/

var body = $response.body;
var obj = JSON.parse(body);
var obj = {
  originalTransactionId: "520000468152521",
  subscriptionState: "active",
  isInGracePeriod: false,
  subscriptionExpirationDate: "13:15 03/11/2099",
  subscriptionAutoRenewStatus: "autoRenewOn",
  isEligibleForIntroPeriod: false,
  isPDFExpert6User: true,
  isDocuments6User: true,
  subscriptionReceiptId: "1572178404000"
};

$done({ body: JSON.stringify(obj) });

/**
 * @supported 97461E4A
 */