const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeLeads(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        const leads = [];

        $('a[href^="mailto:"]').each((index, element) => {
            leads.push($(element).attr('href').replace('mailto:', ''));
        });

        $('a[href*="instagram.com"]').each((index, element) => {
            leads.push($(element).attr('href').split('/').pop());
        });

        return leads;
    } catch (error) {
        console.error(`Error scraping ${url}:`, error);
        return [];
    }
}

(async () => {
    const leads = await scrapeLeads('https://example.com');
    console.log('Leads:', leads);
})();
