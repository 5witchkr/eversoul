<script>
  let apidomain = `https://api.eversoul.site`;
    async function getSSS(){
        // 원격지 데이터를 fetch로 가져오기
        const res = await fetch(`${apidomain}/api/soulcharacter/tier?tier=SSS`); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }
    let SSStierSouls = getSSS(); 
    getSSS();

    async function getSS(){
        // 원격지 데이터를 fetch로 가져오기
        const res = await fetch(`${apidomain}/api/soulcharacter/tier?tier=SS`); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }
    let SStierSouls = getSS(); 
    getSS();

    async function getS(){
        // 원격지 데이터를 fetch로 가져오기
        const res = await fetch(`${apidomain}/api/soulcharacter/tier?tier=S`); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }
    let StierSouls = getS(); 
    getS();

    async function getA(){
        // 원격지 데이터를 fetch로 가져오기
        const res = await fetch(`${apidomain}/api/soulcharacter/tier?tier=A`); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }
    let AtierSouls = getA(); 
    getA();

    async function getB(){
        // 원격지 데이터를 fetch로 가져오기
        const res = await fetch(`${apidomain}/api/soulcharacter/tier?tier=B`); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }
    let BtierSouls = getB(); 
    getB();

    async function getC(){
        // 원격지 데이터를 fetch로 가져오기
        const res = await fetch(`${apidomain}/api/soulcharacter/tier?tier=C`); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }
    let CtierSouls = getC(); 
    getC();

    

    // mockdata for indexsing soulname
    let soulImgIndex = [ 
      '',
      "https://eversoul.kakaogames.com/static/character/adrianne/img-thumb.png" ,
    "https://eversoul.kakaogames.com/static/character/catherine/img-thumb.png",
    "https://eversoul.kakaogames.com/static/character/talia/img-thumb.png",
    "https://eversoul.kakaogames.com/static/character/jacqueline/img-thumb.png",
      "https://eversoul.kakaogames.com/static/character/petra/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/violette/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/jiho/img-thumb.png",
      "https://eversoul.kakaogames.com/static/character/mephistopeles/img-thumb.png",
      "https://eversoul.kakaogames.com/static/character/vivienne/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/linzy/img-thumb.png",
      "https://eversoul.kakaogames.com/static/character/naiah/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/claire/img-thumb.png",
      "https://eversoul.kakaogames.com/static/character/chloe/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/dora/img-thumb.png",
      "https://eversoul.kakaogames.com/static/character/miriam/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/prim/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/cherrie/img-thumb.png",
      "https://eversoul.kakaogames.com/static/character/mica/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/seeha/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/rebecca/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/clara/img-thumb.png",
    "https://eversoul.kakaogames.com/static/character/haru/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/flynn/img-thumb.png",
      "https://eversoul.kakaogames.com/static/character/nini/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/erusha/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/ayame/img-thumb.png",
    "https://eversoul.kakaogames.com/static/character/soonie/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/aira/img-thumb.png" ,
      "https://eversoul.kakaogames.com/static/character/renee/img-thumb.png",
    "https://eversoul.kakaogames.com/static/character/nicole/img-thumb.png" ,
    "https://eversoul.kakaogames.com/static/character/jade/img-thumb.png",
        "https://gcdn.pcpf.kakaogames.com/ui-contents/eversoul/characterLists/eversoul_characterLists_1675242432192_51.png",
        "https://gcdn.pcpf.kakaogames.com/ui-contents/eversoul/characterLists/eversoul_characterLists_1676505210528_4.png"
      ];

</script>

<svelte:head>
    <title>에버소울 티어표</title> 
</svelte:head>



<div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box"> 
    <div class="collapse-title text-xl font-medium text-center">
      정령 티어표 정보
    </div>
    <div class="collapse-content"> 
        <div class="badge badge-secondary">SSS티어</div>
        <div class="badge badge-error">SS티어</div>
        <div class="badge badge-warning">S티어</div>
        <div class="badge badge-primary">A티어</div>
        <div class="badge badge-info">B티어</div>
        <div class="badge badge-base-100">C티어</div>
    </div>
  </div>
<div class="divider"></div> 
{#await SSStierSouls}
{:then souls} <!-- 정상 종료 후 처리 -->
{#each souls as value}  <!-- 반복 횟수 변수 idx 선언 -->
<div class="avatar indicator">
    <span class="indicator-item badge badge-secondary">{value.name}</span> 
    <div class="w-20 h-20 rounded-lg">
        <img src={soulImgIndex[value.id]}>
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
        <img src={soulImgIndex[value.id]}>
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
      <img src={soulImgIndex[value.id]}>
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
      <img src={soulImgIndex[value.id]}>
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
      <img src={soulImgIndex[value.id]}>
    </div>
  </div>
{/each}
{/await}
<div class="divider"></div> 
{#await CtierSouls}
{:then souls} <!-- 정상 종료 후 처리 -->
{#each souls as value}  <!-- 반복 횟수 변수 idx 선언 -->
<div class="avatar indicator">
    <span class="indicator-item badge badge-base-100">{value.name}</span> 
    <div class="w-20 h-20 rounded-lg">
      <img src={soulImgIndex[value.id]}>
    </div>
  </div>
{/each}
{/await}
<div class="divider"></div> 