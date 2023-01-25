export async function load({ fetch }) {
    let res1 = await fetch('https://pickban.duckdns.org/api/soulcharacter/tier?tier=SSS');
    let res2 = await fetch('https://pickban.duckdns.org/api/soulcharacter/tier?tier=SSS');
    let result = await res1.json() + res2.json();
    return result
}