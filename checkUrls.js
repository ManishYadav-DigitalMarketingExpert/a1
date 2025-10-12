const fetch = require('node-fetch');
const { MOZ_ACCESS_ID, MOZ_SECRET_KEY, WHOIS_API_KEY } = process.env;

exports.handler = async function(event, context) {
    const { urls } = JSON.parse(event.body);
    const results = [];

    for (const url of urls) {
        const daPaData = await getMozMetrics(url);
        const domainAge = await getDomainAge(url);
        results.push({
            url,
            da: daPaData.da,
            pa: daPaData.pa,
            spamScore: daPaData.spamScore,
            domainAge,
        });
    }

    return {
        statusCode: 200,
        body: JSON.stringify(results),
    };
};

async function getMozMetrics(url) {
    const response = await fetch(`https://lsapi.seomator.com/api/v1/metrics?url=${url}`, {
        headers: {
            'Authorization': `Bearer ${MOZ_ACCESS_ID}:${MOZ_SECRET_KEY}`,
        },
    });
    const data = await response.json();
    return {
        da: data.da,
        pa: data.pa,
        spamScore: data.spam_score,
    };
}

async function getDomainAge(url) {
    const response = await fetch(`https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${WHOIS_API_KEY}&domainName=${url}&outputFormat=JSON`);
    const data = await response.json();
    const creationDate = new Date(data.WhoisRecord.createdDateNormalized);
    const age = new Date().getFullYear() - creationDate.getFullYear();
    return age;
}
