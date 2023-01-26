<script>

async function getTactic(){
        // 원격지 데이터를 fetch로 가져오기
        let requestLocation = requestLocations.split(" ")[0];
        let requestStep = requestSteps.split(" ")[0];
        let requestBans = bans.split(" ");
        const res = await fetch(`https://pickban.duckdns.org/api/stagetactic/${requestLocation}/${requestStep}?bans=${requestBans}`); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }
    let tacticsCall = getTactic(); 

        // mockdata for indexsing soulname
        let soulIndex = [ '','adrianne','catherine', 'talia','jacqueline',
     'petra', 'violette','jiho','mephistopeles', 'vivienne', 'linzy',
      'naiah', 'claire', 'chloe','dora', 'miriam', 'prim', 'cherrie',
       'mica','seeha','rebecca', 'clara', 'haru', 'flynn', 'nini',
        'erusha','ayame', 'soonie', 'aira', 'renee', 'nicole','jade'];

    let locations = [
        "엘나스", "아케나인", "콜브 초원",
        "다이난 호수", "하얀 울새 숲", "베르트 산맥",
        "비노 협곡", "렉타 황무지", "쿠르 사바나", 
        "아르코 이리스","모레노 사막","라피아 정글",
        "반딧불이의 둥지","나델 고산지","그림자 없는 땅"
        ]; // 반복 출력할 배열
    let steps = [
        1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30,
        31,32,33,34,35,36,37,38,39,40,
        41,42,43,44,45];

    let ban;

    //api call values
    let requestLocations;
    let requestSteps;

	let bans = " ";

	// $: if (count >= 10) {
	// 	alert(`count is dangerously high!`);
	// 	count = 9;
	// }

	function addBanClick() {
		bans += ban+" ";
    ban = ''
	}
  function resetBanClick() {
		bans = " ";
    ban = ''
	}

    let selectPage = true;
    let detailPage1 = false;
    let detailPage2 = false;
    let detailPage3 = false;
    let detailPage4 = false;

      const viewRecommendClick = (positonValue) =>{
        //fetch호출 후 랜더링
        if(selectPage) {
          selectPage = !selectPage;
        }
        if(positonValue==="기본"){
          detailPageAllOff();
          detailPage1 = !detailPage1
        }
        if(positonValue==="수비"){
          detailPageAllOff();
          detailPage2 = !detailPage2
        }
        if(positonValue==="돌격"){
          detailPageAllOff();
          detailPage3 = !detailPage3
        }
        if(positonValue==="저격"){
          detailPageAllOff();
          detailPage4 = !detailPage4
        }
      }

      function detailPageAllOff(){
        detailPage1 = false;
        detailPage2 = false;
        detailPage3 = false;
        detailPage4 = false;
      }

      function retryClick(){
        detailPageAllOff()
        selectPage = true;
      }


</script>
{#if selectPage}
    <div class="flex justify-center px-4 py-16 border-t border-base-300">
        <div class="flex flex-col w-300">
        <div class="form-control w-300 max-w-xs">
            <label class="label">
              <span class="label-text">지역을 고르세요</span>
              <span class="label-text-alt">Location</span>
            </label>
            <select class="select select-bordered" bind:value={requestLocations}>
              <option disabled selected>Pick Location</option>
              {#each locations as location, idx}  <!-- 반복 횟수 변수 idx 선언 -->
              <option>{idx+1} 지역 {location}</option>   <!-- 배열의 요소를 li로 출력 -->
            {/each}
            </select>
          </div>
          <div class="divider divider-horizontal"> </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">단계를 고르세요</span>
              <span class="label-text-alt">Step</span>
            </label>
            <select class="select select-bordered"  bind:value={requestSteps}>
              <option disabled selected>Pick Step</option>
              {#each steps as step}  <!-- 반복 횟수 변수 idx 선언 -->
              <option>{step} 단계</option>   <!-- 배열의 요소를 li로 출력 -->
            {/each}
            </select>
          </div>
          <label class="label">
            <span class="label-text">보유하지 않은 정령이 있나요?</span>
          </label>
          <div class="form-control">
            <div class="input-group">
              <input type="text" bind:value={ban} placeholder="제외하기.." class="input input-bordered" />
              <button class="btn btn-square" on:click={addBanClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </button>
            </div>
            <label class="label">
                <span class="label-text">제외된 정령</span>
                <button on:click={resetBanClick} >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </label>
              <textarea class="textarea" placeholder="Bio" style="text-decoration-color:honeydew;" disabled>
                {bans}</textarea>
        
              
          </div>
          <div class="divider"></div>
          <label for="my-modal-3" class="btn" on:click={() => tacticsCall = getTactic()}>공략 찾아보기</label>
          <div class="divider"></div>
          <a href="/stage-post">
            <button class="btn btn-block">
                공략글 작성하러 가기
          </a>
    </div>
</div>
{/if}


<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold">원하는 공략을 고르세요</h3>
    <a>(등록된 공략이 없을경우에는 보이지 않습니다).</a>
    <ul class="menu bg-base-100 w-80 p-2 rounded-box">
      {#await tacticsCall}
      {:then tactics} <!-- 정상 종료 후 처리 -->
      {#each tactics as valueeee} 
      {#if valueeee.position == "기본"}
      <li><button class="btn" on:click={() => viewRecommendClick("기본")}>클리어 덱 전투력: {valueeee.power}</button></li>
      {/if}
      {#if valueeee.position == "수비"}
      <li><button class="btn" on:click={() => viewRecommendClick("수비")}>클리어 덱 전투력: {valueeee.power}</button></li>
      {/if}
      {#if valueeee.position == "돌격"}
      <li><button class="btn" on:click={() => viewRecommendClick("돌격")}>클리어 덱 전투력: {valueeee.power}</button></li>
      {/if}
      {#if valueeee.position == "저격"}
      <li><button class="btn" on:click={() => viewRecommendClick("저격")}>클리어 덱 전투력: {valueeee.power}</button></li>
      {/if}
      {/each}
      
      {/await}
    </ul>
  </div>
</div>

{#await tacticsCall}
{:then tactics} <!-- 정상 종료 후 처리 -->
{#each tactics as valueeee} 
{#if valueeee.position == "기본"}
<!-- 기본진형 -->
{#if detailPage1}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">

        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">

                <!-- 후열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50 p-6">

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[2].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[2].id]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[3].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[3].id]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[4].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[4].id]}/img-thumb.png">
                </div>
                </div>

            </div>

            <!-- 전열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50" style="margin-top: 7vh;">
                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[0].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[0].id]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[1].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[1].id]}/img-thumb.png">
                </div>
                </div>
              </div>

            </div>
          </div>
          <div class="divider"></div>
          <p>포지션: {valueeee.position}</p>
          <p>전투력: {valueeee.power}</p>
          <a style="max-width: 40vh; text-decoration: underline;">
            정보: {valueeee.info}</a>
      <div class="divider"></div>
      <button class="btn" on:click={retryClick}>다시 고르기</button>
    </div>
</div>
{/if}
{/if}



{#if valueeee.position == "수비"}
<!-- 수비진형 -->
{#if detailPage2}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">

        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">


              <!-- 후열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50" style="margin-top: 7vh;">
              <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[3].level}</span> 
              <div class="w-20 h-20 rounded-lg">
                  <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[3].id]}/img-thumb.png">
              </div>
              </div>

              <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[4].level}</span> 
              <div class="w-20 h-20 rounded-lg">
                  <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[4].id]}/img-thumb.png">
              </div>
              </div>
            </div>

                <!-- 전열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50 p-6">

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[0].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[0].id]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[1].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[1].id]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[2].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[2].id]}/img-thumb.png">
                </div>
                </div>

            </div>
            </div>
          </div>
          <div class="divider"></div>
          <p>포지션: {valueeee.position}</p>
          <p>전투력: {valueeee.power}</p>
          <a style="max-width: 40vh; text-decoration: underline;">
            정보: {valueeee.info}</a>
      <div class="divider"></div>
      <button class="btn" on:click={retryClick}>다시 고르기</button>
    </div>
</div>
{/if}
{/if}



{#if valueeee.position == "돌격"}
<!-- 돌격진형 -->
{#if detailPage3}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">

        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">


              <!-- 후열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50" style="margin-top: 17vh;">
          
              <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[4].level}</span> 
              <div class="w-20 h-20 rounded-lg">
                  <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[4].id]}/img-thumb.png">
              </div>
              </div>
            </div>

                <!-- 전열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50 p-6">

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[0].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[0].id]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[1].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[1].id]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[2].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[2].id]}/img-thumb.png">
                </div>
                </div>
                <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[3].level}</span> 
              <div class="w-20 h-20 rounded-lg">
                  <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[3].id]}/img-thumb.png">
              </div>
              </div>
            </div>
            </div>
          </div>
          <div class="divider"></div>
          <p>포지션: {valueeee.position}</p>
          <p>전투력: {valueeee.power}</p>
          <a style="max-width: 40vh; text-decoration: underline;">
            정보: {valueeee.info}</a>
      <div class="divider"></div>
      <button class="btn" on:click={retryClick}>다시 고르기</button>
    </div>
</div>
{/if}
{/if}





{#if valueeee.position == "저격"}
<!-- 저격진형 -->
{#if detailPage4}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">

        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">

                <!-- 후열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50 p-6">

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[1].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[1].id]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[2].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[2].id]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[3].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[3].id]}/img-thumb.png">
                </div>
                </div>
                <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[4].level}</span> 
              <div class="w-20 h-20 rounded-lg">
                  <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[4].id]}/img-thumb.png">
              </div>
              </div>
            </div>

              <!-- 전열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50" style="margin-top: 15vh;">
          
              <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">LV.{valueeee.soulCharacterTacticResponseDtos[0].level}</span> 
              <div class="w-20 h-20 rounded-lg">
                  <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[valueeee.soulCharacterTacticResponseDtos[0].id]}/img-thumb.png">
              </div>
              </div>
          

            </div>
            </div>
          </div>
          <div class="divider"></div>
          <p>포지션: {valueeee.position}</p>
          <p>전투력: {valueeee.power}</p>
          <a style="max-width: 40vh; text-decoration: underline;">
            정보: {valueeee.info}</a>
      <div class="divider"></div>
      <button class="btn" on:click={retryClick}>다시 고르기</button>
    </div>
</div>
{/if}
{/if}
{/each}
{/await}
