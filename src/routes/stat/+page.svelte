<script>

let apidomain = `https://api.eversoul.site`;

let soulCharacters = ['','아드리안','캐서린', '탈리아','재클린',
 '페트라', '비올레트','지호','메피', '비비안', '린지',
  '나이아', '클레르', '클로이','도라', '미리암', '프림', '셰리',
   '미카','시하','레베카', '클라라', '하루', '플린', '니니',
    '에루샤','아야메', '순이', '아이라', '르네', '니콜','제이드','벨라나'];

// mockdata for indexsing soulname
let soulIndex = ['','adrianne','catherine', 'talia','jacqueline',
 'petra', 'violette','jiho','mephistopeles', 'vivienne', 'linzy',
  'naiah', 'claire', 'chloe','dora', 'miriam', 'prim', 'cherrie',
   'mica','seeha','rebecca', 'clara', 'haru', 'flynn', 'nini',
    'erusha','ayame', 'soonie', 'aira', 'renee', 'nicole','jade','velanna'];




    async function getPositionStat(){
        const res = await fetch(`${apidomain}/api/stat/position`);
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json; 
    }

    async function getTopSoulSelectStat(){
        const res = await fetch(`${apidomain}/api/stat/soulselect?argNumber=5`);
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json; 
    }


    let clickOneStat = false;
    let soulNameValue = "";


    async function getOneSoulSelectStat(){
        if(typeof soulNameValue == "" || soulNameValue=="" || typeof soulNameValue == "undefined"){
            return;
        }
        clickOneStat = true;
        const res = await fetch(`${apidomain}/api/stat/soulselect/${soulCharacters.indexOf(soulNameValue)}`);
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json; 
    }
    

    let oneSoulSelectCall = getOneSoulSelectStat();
    let topSoulSelectCall = getTopSoulSelectStat();
    let positionStatCall = getPositionStat();
    

    // async function reloadPage() {
    //     selectPage = true;
    // }







</script>

<svelte:head>
    <title>데이터 통계</title> 
</svelte:head>

<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">
    <div class="form-control w-300 max-w-xs">

        <div class="grid h-10 card bg-base-300 rounded-box place-items-center">데이터 통계는 하루마다 갱신됩니다.</div>

        <div class="divider"></div> 

<div class="collapse">
    <input type="checkbox" class="peer" /> 
    <div class="collapse-title bg-info-content text-primary-content peer-checked:bg-info-content peer-checked:text-secondary-content">
        📈 가장 많이 사용한 정령
    </div>
    <div class="collapse-content bg-info-content text-primary-content peer-checked:bg-info-content peer-checked:text-secondary-content">
        <div class="flex flex-col w-300">
            <div class="form-control w-300 max-w-xs">
                
                    <div class="divider"></div> 

                    {#await topSoulSelectCall}
                    {:then values} 
                    {#each values as value, idx}
                    <div style="text-align: center;">
                        <div class="avatar indicator">
                            <span class="indicator-item badge badge-neutral">{soulCharacters[value.id]}</span> 
                            <div class="w-20 h-20 rounded-lg">
                                <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[value.id]}/img-thumb.png" class="loaded">
                            </div>
                            <div class="tooltip" data-tip="hello">
                                <button class="btn">{idx+1}위 {value.selectCount}회 출전</button>
                              </div>
                          </div>
                    </div>
                    {/each}
                    {/await}


        </div>
        </div>
    </div>
  </div>

  <div class="divider"></div> 


<div class="collapse">
    <input type="checkbox" class="peer" /> 
    <div class="collapse-title bg-primary-focus text-primary-content peer-checked:bg-primary-focus peer-checked:text-secondary-content">
      📊 전선 사용 포지션 통계
    </div>
    <div class="collapse-content bg-primary-focus text-primary-content peer-checked:bg-primary-focus peer-checked:text-secondary-content"> 
        {#await positionStatCall}
        {:then positionStats}
        {#each positionStats as positionStat} 
        <span class="badge">{positionStat.positionName} 진형</span>
        <progress class="progress w-56" value="{positionStat.positionCount}" max="100"></progress>
        {/each}
        {/await}
    </div>
  </div>

  <div class="divider"></div> 

  

  <div class="form-control">
    <div class="input-group">
      <input type="text" placeholder="정령 검색하기" class="input input-bordered" bind:value={soulNameValue}/>
      <button class="btn btn-square" on:click={() => oneSoulSelectCall = getOneSoulSelectStat()}>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </button>
    </div>
  </div>

  <div class="divider"></div>


  {#if clickOneStat}
  <div class="flex flex-col w-300">
    <div class="form-control w-300 max-w-xs">
        {#await oneSoulSelectCall}
        {:then onesoulstats}
        <div >
            <div class="avatar">
                <div class="w-24 mask mask-hexagon">
                    <img alt="" src="https://eversoul.kakaogames.com/static/character/{soulIndex[onesoulstats.id]}/img-thumb.png" class="loaded">
                </div>
                <ul class="menu bg-base-100 w-56">
                    <li><a><div class="badge">{soulCharacters[onesoulstats.id]}</div></a></li>
                    <li><a>선택 횟수: {onesoulstats.selectCount}</a></li>
                    <li><a></a></li>
                  </ul>
              </div>
        </div>
        {/await}
    </div>
    </div>
    {/if}

    </div>
    </div>
</div>