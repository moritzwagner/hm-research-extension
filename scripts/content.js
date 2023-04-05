//redirect.json
const data = [
    {
        "org_host": "de.statista.com",
        "new_host": "de-statista-com.ezproxy.bib.hm.edu"
    },
    {
        "org_host": "link.springer.com",
        "new_host": "link-springer-com.ezproxy.bib.hm.edu"
    },
    {
        "org_host": "www.hanser-elibrary.com",
        "new_host": "www-hanser-elibrary-com.ezproxy.bib.hm.edu"
    }
];

const url = window.location.href;
//get host of url
const host = new URL(url).host;

//check if host is in redirect.json
for (let i = 0; i < data.length; i++) {
    if (host === data[i].org_host) {
        //replace host with new host
        var newUrl = url.replace(host, data[i].new_host);
        //redirect to new url
        window.location.replace(newUrl);
    }
}
