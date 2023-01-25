<script>
    async function getSSS(){
        // 원격지 데이터를 fetch로 가져오기
        const res = await fetch("https://pickban.duckdns.org/api/soulcharacter/tier?tier=SSS"); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }
    let SSStierSouls = getSSS(); 
    getSSS();

    async function getSS(){
        // 원격지 데이터를 fetch로 가져오기
        const res = await fetch('https://pickban.duckdns.org/api/soulcharacter/tier?tier=SS'); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }
    let SStierSouls = getSS(); 
    getSS();

    async function getS(){
        // 원격지 데이터를 fetch로 가져오기
        const res = await fetch('https://pickban.duckdns.org/api/soulcharacter/tier?tier=S'); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }
    let StierSouls = getS(); 
    getS();

    async function getA(){
        // 원격지 데이터를 fetch로 가져오기
        const res = await fetch('https://pickban.duckdns.org/api/soulcharacter/tier?tier=A'); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }
    let AtierSouls = getA(); 
    getA();

    async function getB(){
        // 원격지 데이터를 fetch로 가져오기
        const res = await fetch('https://pickban.duckdns.org/api/soulcharacter/tier?tier=B'); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }
    let BtierSouls = getB(); 
    getB();

    

    // mockdata for indexsing soulname
    let soulIndex = [ '','adrianne','catherine', 'talia','jacqueline',
     'petra', 'violette','jiho','mephistopeles', 'vivienne', 'linzy',
      'naiah', 'claire', 'chloe','dora', 'miriam', 'prim', 'cherrie',
       'mica', 'rebecca', 'seeha', 'clara', 'haru', 'flynn', 'nini',
        'erusha','ayame', 'soonie', 'aira', 'renee', 'nicole','jade'];


</script>

<div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box"> 
    <div class="collapse-title text-xl font-medium text-center">
      정령 티어표
    </div>
    <div class="collapse-content"> 
        <div class="badge badge-secondary">SSS티어</div>
        <div class="badge badge-error">SS티어</div>
        <div class="badge badge-warning">S티어</div>
        <div class="badge badge-primary">A티어</div>
        <div class="badge badge-info">B티어</div>
    </div>
  </div>
<div class="divider"></div> 
{#await SSStierSouls}
{:then souls} <!-- 정상 종료 후 처리 -->
{#each souls as value}  <!-- 반복 횟수 변수 idx 선언 -->
<div class="avatar indicator">
    <span class="indicator-item badge badge-secondary">{value.name}</span> 
    <div class="w-20 h-20 rounded-lg">
        <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[value.id]}/img-thumb.png">
    </div>
  </div>
{/each}
{/await}
<div class="divider"></div> 
{#await SStierSouls}
{:then souls} <!-- 정상 종료 후 처리 -->
{#each souls as value}  <!-- 반복 횟수 변수 idx 선언 -->
<div class="avatar indicator">
    <span class="indicator-item badge badge-error">{value.name}</span> 
    <div class="w-20 h-20 rounded-lg">
        <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[value.id]}/img-thumb.png">
    </div>
  </div>
{/each}
{/await}
<div class="divider"></div> 
{#await StierSouls}
{:then souls} <!-- 정상 종료 후 처리 -->
{#each souls as value}  <!-- 반복 횟수 변수 idx 선언 -->
<div class="avatar indicator">
    <span class="indicator-item badge badge-warning">{value.name}</span> 
    <div class="w-20 h-20 rounded-lg">
        <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[value.id]}/img-thumb.png">
    </div>
  </div>
{/each}
{/await}
<div class="divider"></div> 
{#await AtierSouls}
{:then souls} <!-- 정상 종료 후 처리 -->
{#each souls as value}  <!-- 반복 횟수 변수 idx 선언 -->
<div class="avatar indicator">
    <span class="indicator-item badge badge-primary">{value.name}</span> 
    <div class="w-20 h-20 rounded-lg">
        <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[value.id]}/img-thumb.png">
    </div>
  </div>
{/each}
{/await}
<div class="divider"></div> 
{#await BtierSouls}
{:then souls} <!-- 정상 종료 후 처리 -->
{#each souls as value}  <!-- 반복 횟수 변수 idx 선언 -->
<div class="avatar indicator">
    <span class="indicator-item badge badge-info">{value.name}</span> 
    <div class="w-20 h-20 rounded-lg">
        <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[value.id]}/img-thumb.png">
    </div>
  </div>
{/each}
{/await}
<div class="divider"></div> 