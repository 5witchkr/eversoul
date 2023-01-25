<script>

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
    let requestLocation;
    let requestStep;
	let bans = [];

	// $: if (count >= 10) {
	// 	alert(`count is dangerously high!`);
	// 	count = 9;
	// }

	function handleClick() {
		bans += ban+" ";
        ban = ''
	}

    let selectPage = true;
    let detailPage1 = false;
    let detailPage2 = false;
    let detailPage3 = false;
    let detailPage4 = false;

    function recommendClick(){
        requestLocation,requestStep,bans
        //fetch호출 후 랜더링
        selectPage = !selectPage;
        detailPage4 = !detailPage4;
      }

      let Atiers = ['ayame', 'soonie', 'aira', 'renee', 'nicole'];

</script>
{#if selectPage}
    <div class="flex justify-center px-4 py-16 border-t border-base-300">
        <div class="flex flex-col w-300">
        <div class="form-control w-300 max-w-xs">
            <label class="label">
              <span class="label-text">지역을 고르세요</span>
              <span class="label-text-alt">Location</span>
            </label>
            <select class="select select-bordered" bind:value={requestLocation}>
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
            <select class="select select-bordered"  bind:value={requestStep}>
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
              <button class="btn btn-square" on:click={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </button>
            </div>
            <label class="label">
                <span class="label-text">제외된 정령: {bans}</span>
              </label>
          </div>
          <div class="divider"></div>
          <button class="btn" on:click={recommendClick}>추천조합 보기</button>
    </div>
</div>
{/if}
<!-- 
{#if detailPage}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">

        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">
              {#each Atiers as value} 
                <div class="avatar indicator">
                <span class="indicator-item badge badge-neutral-focus">{value}</span> 
                <div class="w-20 h-20 rounded-lg">
                <img src="https://eversoul.kakaogames.com/static/character/{value}/img-thumb.png">
                </div>
                </div>
            {/each}
            </div>
          </div>
          <div class="divider"></div>
          <p>레벨: 100, 101, 102, 104, 120</p>
          <p>전투력: 11111</p>
          <p>포지션: 기본</p>
          <p>정보: 이렇게하셈</p>

      <div class="divider"></div>
      <button class="btn" on:click={recommendClick}>다시 고르기</button>
    </div>
</div>
{/if} -->


<!-- 기본진형 -->
{#if detailPage1}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">

        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">

                <!-- 후열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50 p-6">

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[2]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[2]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[3]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[3]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[4]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[4]}/img-thumb.png">
                </div>
                </div>

            </div>

            <!-- 전열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50" style="margin-top: 7vh;">
                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[0]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[0]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[1]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[1]}/img-thumb.png">
                </div>
                </div>
              </div>

            </div>
          </div>
          <div class="divider"></div>
          <p>포지션: 기본</p>
          <p>전투력: 11111</p>
          <p style="max-width: 40vh;">정보: 이렇게하셈 메피죽으면 1235235235235253게 저렇게</p>

      <div class="divider"></div>
      <button class="btn" on:click={recommendClick}>다시 고르기</button>
    </div>
</div>
{/if}

<!-- 수비진형 -->
{#if detailPage2}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">

        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">


              <!-- 후열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50" style="margin-top: 7vh;">
              <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">{Atiers[3]}</span> 
              <div class="w-20 h-20 rounded-lg">
                  <img src="https://eversoul.kakaogames.com/static/character/{Atiers[3]}/img-thumb.png">
              </div>
              </div>

              <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">{Atiers[4]}</span> 
              <div class="w-20 h-20 rounded-lg">
                  <img src="https://eversoul.kakaogames.com/static/character/{Atiers[4]}/img-thumb.png">
              </div>
              </div>
            </div>

                <!-- 전열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50 p-6">

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[0]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[0]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[1]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[1]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[2]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[2]}/img-thumb.png">
                </div>
                </div>

            </div>
            </div>
          </div>
          <div class="divider"></div>
          <p>포지션: 수비</p>
          <p>전투력: 11111</p>
          <p style="max-width: 40vh;">정보: 이렇게하셈 메피죽으면 리123423145123512355235 이렇게 저렇게</p>

      <div class="divider"></div>
      <button class="btn" on:click={recommendClick}>다시 고르기</button>
    </div>
</div>
{/if}

<!-- 돌격진형 -->
{#if detailPage3}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">

        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">


              <!-- 후열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50" style="margin-top: 17vh;">
          
              <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">{Atiers[4]}</span> 
              <div class="w-20 h-20 rounded-lg">
                  <img src="https://eversoul.kakaogames.com/static/character/{Atiers[4]}/img-thumb.png">
              </div>
              </div>
            </div>

                <!-- 전열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50 p-6">

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[0]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[0]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[1]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[1]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[2]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[2]}/img-thumb.png">
                </div>
                </div>
                <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">{Atiers[3]}</span> 
              <div class="w-20 h-20 rounded-lg">
                  <img src="https://eversoul.kakaogames.com/static/character/{Atiers[3]}/img-thumb.png">
              </div>
              </div>

            </div>
            </div>
          </div>
          <div class="divider"></div>
          <p>포지션: 돌격</p>
          <p>전투력: 11111</p>
          <p style="max-width: 40vh;">정보: 이렇게하셈 메피죽으면 리123423145123512355235 이렇게 저렇게</p>

      <div class="divider"></div>
      <button class="btn" on:click={recommendClick}>다시 고르기</button>
    </div>
</div>
{/if}

<!-- 저격진형 -->
{#if detailPage4}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">

        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">

                <!-- 후열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50 p-6">

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[1]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[1]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[2]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[2]}/img-thumb.png">
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">{Atiers[3]}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src="https://eversoul.kakaogames.com/static/character/{Atiers[3]}/img-thumb.png">
                </div>
                </div>
                <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">{Atiers[4]}</span> 
              <div class="w-20 h-20 rounded-lg">
                  <img src="https://eversoul.kakaogames.com/static/character/{Atiers[4]}/img-thumb.png">
              </div>
              </div>
            </div>

              <!-- 전열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50" style="margin-top: 17vh;">
          
              <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">{Atiers[0]}</span> 
              <div class="w-20 h-20 rounded-lg">
                  <img src="https://eversoul.kakaogames.com/static/character/{Atiers[0]}/img-thumb.png">
              </div>
              </div>
          

            </div>
            </div>
          </div>
          <div class="divider"></div>
          <p>포지션: 저격</p>
          <p>전투력: 11111</p>
          <p style="max-width: 40vh;">정보: 이렇게하셈 메피죽으면 리123423145123512355235 이렇게 저렇게</p>

      <div class="divider"></div>
      <button class="btn" on:click={recommendClick}>다시 고르기</button>
    </div>
</div>
{/if}