/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = {}
    cpdomains.forEach(pair => {
        let [count, domain] = pair.split(' ')
        domain.split('.').reverse().reduce((prev, curr) => {
            let next =  prev ? curr + '.' + prev : curr;
            
            if (!map[next]) map[next] = 0;
            map[next] += Number(count);
            
            return next;
        }, null)
    })
    console.log(map['com'])
    return Object.keys(map).map(key => map[key] + ' ' + key)
}

// Thinking

/* useing map 
 * Fisrt use forEach get each domain and times
 * get complete domain split it which reverse and useing reduce founction  combine to all subdomain 
 * tnen add to our map can get all domain and subsdomains' number
 * last using map function return to what you want.
*/