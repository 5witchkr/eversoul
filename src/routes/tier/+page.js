export async function load({ fetch }) {
    let res1 = await fetch('https://pickban.duckdns.org/api/soulcharacter/tier?tier=SSS');
    let result = await res1.json();
    return result
}