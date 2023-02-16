<script>

let apidomain = `https://api.eversoul.site`;

let soulCharacters = ['','아드리안','캐서린', '탈리아','재클린',
 '페트라', '비올레트','지호','메피', '비비안', '린지',
  '나이아', '클레르', '클로이','도라', '미리암', '프림', '셰리',
   '미카','시하','레베카', '클라라', '하루', '플린', '니니',
    '에루샤','아야메', '순이', '아이라', '르네', '니콜','제이드','벨라나','홍란'];


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
        ""
      ];
// mockdata for indexsing soulname
let soulIndex = ['','adrianne','catherine', 'talia','jacqueline',
 'petra', 'violette','jiho','mephistopeles', 'vivienne', 'linzy',
  'naiah', 'claire', 'chloe','dora', 'miriam', 'prim', 'cherrie',
   'mica','seeha','rebecca', 'clara', 'haru', 'flynn', 'nini',
    'erusha','ayame', 'soonie', 'aira', 'renee', 'nicole','jade','velanna','hl'];




    async function getPositionStat(){
        const res = await fetch(`${apidomain}/api/stat/position`);
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json; 
    }

    async function getTopSoulSelectStat(){
        const res = await fetch(`${apidomain}/api/stat/soulselect?argNumber=5&rating=top`);
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json; 
    }

    async function getBottomSoulSelectStat(){
        const res = await fetch(`${apidomain}/api/stat/soulselect?argNumber=5&rating=bottom`);
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json; 
    }

    async function getSoulConnect(){
        const res = await fetch(`${apidomain}/api/stat/soulconnect?argNumber=5`);
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json; 
    }

    async function getOneSoulConnect(){
      if(typeof soulNameValue == "" || soulNameValue=="" || typeof soulNameValue == "undefined"){
            return;
        }
        const res = await fetch(`${apidomain}/api/stat/soulconnect/${soulCharacters.indexOf(soulNameValue)}`);
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
    

    let oneSoulConnectCall = getOneSoulConnect();
    let oneSoulSelectCall = getOneSoulSelectStat();
    let topSoulSelectCall = getTopSoulSelectStat();
    let bottomSoulSelectCall = getBottomSoulSelectStat();
    let soulConnectCall = getSoulConnect();
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
        📈 가장 많이 사용된 정령
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
                                <img src={soulImgIndex[value.id]} />
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
    <div class="collapse-title bg-orange-900 text-primary-content peer-checked:bg-orange-900 peer-checked:text-secondary-content">
        📉 가장 적게 사용된 정령
    </div>
    <div class="collapse-content bg-orange-900 text-primary-content peer-checked:bg-orange-900 peer-checked:text-secondary-content">
        <div class="flex flex-col w-300">
            <div class="form-control w-300 max-w-xs">
                
                    <div class="divider"></div> 

                    {#await bottomSoulSelectCall}
                    {:then values} 
                    {#each values as value}
                    <div style="text-align: center;">
                        <div class="avatar indicator">
                            <span class="indicator-item badge badge-neutral">{soulCharacters[value.id]}</span> 
                            <div class="w-20 h-20 rounded-lg">
                                <img src={soulImgIndex[value.id]} />
                            </div>
                            <div class="tooltip" data-tip="hello">
                                <button class="btn"> {value.selectCount}회 출전</button>
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
  

  <div class="collapse">
    <input type="checkbox" class="peer" /> 
    <div class="collapse-title bg-pink-900 text-primary-content peer-checked:bg-pink-900 peer-checked:text-secondary-content">
        🥂 함께 사용된 정령 TOP5
    </div>
    <div class="collapse-content bg-pink-900 text-primary-content peer-checked:bg-pink-900 peer-checked:text-secondary-content">
        <div class="flex flex-col w-300">
            <div class="form-control w-300 max-w-xs">
                
                    <div class="divider"></div> 

                    {#await soulConnectCall}
                    {:then values} 
                    {#each values as value}
                    <div style="text-align: center;">
                        <div class="avatar indicator">
                            <div class="w-20 h-20 rounded-lg">
                                <img src={soulImgIndex[value.connectSoul]} />
                            </div>
                            <div class="w-20 h-20 rounded-lg">
                              <img src={soulImgIndex[value.connectedSoul]} />
                          </div>
                            <div class="tooltip" data-tip="hello">
                                <button class="btn"> {value.connectCount}번 함께 출전</button>
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

  <div class="form-control">
    <div class="input-group">
      <input type="text" placeholder="정령 검색하기" class="input input-bordered" bind:value={soulNameValue}/>
      <button class="btn btn-square" on:click={() => {
        oneSoulConnectCall = getOneSoulConnect();
        oneSoulSelectCall = getOneSoulSelectStat();
        }}>
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
                    <img src={soulImgIndex[onesoulstats.id]} />
                </div>
                <ul class="menu bg-base-100 w-56">
                    <li><a><div class="badge">{soulCharacters[onesoulstats.id]}</div></a></li>
                    <li><a>선택 횟수: {onesoulstats.selectCount}</a></li>
                    <li><a></a></li>
                  </ul>
              </div>
        </div>
        🥂 함께 사용된 정령
        {/await}
        {#await oneSoulConnectCall}
        {:then onesoulstats}
        {#each onesoulstats as value}
        <span class="badge" style="margin-top: 5px;">{soulCharacters[value.connectSoul]} & {soulCharacters[value.connectedSoul]} - {value.connectCount}번</span>
        <progress class="progress progress-error w-56" value="{value.connectCount}" max="100"></progress>
      {/each}
        {/await}
    </div>
    </div>
    {/if}

    </div>
    </div>
</div>