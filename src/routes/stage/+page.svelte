<script>
  let apidomain = `https://api.eversoul.site`;

    //api call values
    let requestLocations;
    let requestSteps;
    let username;
    let contents;
    let tacticIdValue;
    let positionValue;

async function getTactic(){
        let requestLocation = requestLocations.split(" ")[0];
        let requestStep = requestSteps.split(" ")[0];
        let requestBans = bans.split(" ");
        if (requestLocation=="Pick" || requestStep=="Pick") {
          return ;
        }
        const res = await fetch(`${apidomain}/api/stagetactic/${requestLocation}/${requestStep}?bans=${requestBans}`); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }


    async function getComment(detailId){
      if(typeof detailId == "undefined") {
        return;
      }
        const res = await fetch(`${apidomain}/api/tacticcomment/${detailId}`); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }

    async function createComment() {
      if(typeof tacticIdValue == "undefined") {
        return;
      }
		const respost = await fetch(`${apidomain}/api/tacticcomment`, {
            headers:{'Content-Type':'application/json'},
            //cookie
			method: 'POST',
			body: JSON.stringify({
        tacticId: tacticIdValue,
        username,
        contents
		})
		})
    const postStatus = await respost.status;
        if (postStatus == 201) {    
            contents = "";
            callDetailPage();
        } else{
        alert("입력값을 확인해주세요.");
    }
	}


  async function postRecommend() {
      if(typeof tacticIdValue == "undefined") {
        return;
      }
		const respost = await fetch(`${apidomain}/api/tacticrecommend/${tacticIdValue}`, {
            headers:{'Content-Type':'application/json'},
            //cookie
			method: 'POST'
		})
    const postStatus = await respost.status;
        if (postStatus == 201) {    
            contents = "";
            callDetailPage();
            alert("이 공략을 추천했습니다. (하루에 한번만 가능합니다)")
    }
	}


    let tacticsCall = getTactic(); 
    let commentCall = getComment();


        // mockdata for indexsing soulname
        let soulIndex = [ '','adrianne','catherine', 'talia','jacqueline',
     'petra', 'violette','jiho','mephistopeles', 'vivienne', 'linzy',
      'naiah', 'claire', 'chloe','dora', 'miriam', 'prim', 'cherrie',
       'mica','seeha','rebecca', 'clara', 'haru', 'flynn', 'nini',
        'erusha','ayame', 'soonie', 'aira', 'renee', 'nicole','jade'];
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

    let locations = [
        "엘나스", "아케나인", "콜브 초원",
        "다이난 호수", "하얀 울새 숲", "베르트 산맥",
        "비노 협곡", "렉타 황무지", "쿠르 사바나", 
        "아르코 이리스","모레노 사막","라피아 정글",
        "반딧불이의 둥지","나델 고산지","그림자 없는 땅","유령도시 모르투스"
        ]; // 반복 출력할 배열
    let steps = [
        1,2,3,4,5,6,7,8,9,10,
        11,12,13,14,15,16,17,18,19,20,
        21,22,23,24,25,26,27,28,29,30,
        31,32,33,34,35,36,37,38,39,40,
        41,42,43,44,45];


    let ban;
	let bans = " ";


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
    let tacticIndex = 0;
      const viewRecommendClick = (valueeee, idx) =>{
        //fetch호출 후 랜더링
        tacticIndex = idx;
        positionValue = valueeee.position;
        tacticIdValue = valueeee.tacticId;
        callDetailPage()
      }
      function callDetailPage(){
        if(selectPage) {
          selectPage = !selectPage;
        }

        detailPageAllOff();

        if(positionValue==="기본"){
          detailPage1 = !detailPage1
        }
        if(positionValue==="수비"){
          detailPage2 = !detailPage2
        }
        if(positionValue==="돌격"){
          detailPage3 = !detailPage3
        }
        if(positionValue==="저격"){
          detailPage4 = !detailPage4
        }
        commentCall = getComment(tacticIdValue);
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

<svelte:head>
    <title>에버소울 스테이지 공략</title> 
</svelte:head>


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
              <textarea class="textarea textarea-bordered" placeholder="Bio" readonly> {bans}</textarea>
        
              
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
    <ul class="menu bg-base-100 w-100 p-2 rounded-box">
      {#await tacticsCall}
      {:then tactics} <!-- 정상 종료 후 처리 -->
      {#each tactics as valueeee ,idx} 
      <li><button style="margin: 3px;" on:click={ viewRecommendClick(valueeee, idx)}>추천도:{valueeee.recommendCount} {valueeee.title}({valueeee.power})</button></li>
      {/each}
      {/await}
    </ul>
  </div>
</div>

{#await tacticsCall}
{:then valueeee} <!-- 정상 종료 후 처리 -->
{#if valueeee[tacticIndex]}
{#if valueeee[tacticIndex].position == "기본"}
<!-- 기본진형 -->
{#if detailPage1}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">

        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">

                <!-- 후열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50 p-6">

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[2].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                    <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[2].id]}>
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[3].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                  <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[3].id]}>
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[4].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                  <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[4].id]}>
                </div>
                </div>

            </div>

            <!-- 전열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50" style="margin-top: 7vh;">
                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[0].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                  <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[0].id]}>
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[1].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                  <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[1].id]}>
                </div>
                </div>
              </div>

            </div>
          </div>
          <div class="divider"></div>
          <p style="margin: 1px;">제목: {valueeee[tacticIndex].title}</p>
          <p style="margin: 1px;">포지션: {valueeee[tacticIndex].position}</p>
          <p style="margin: 1px;">전투력: {valueeee[tacticIndex].power}</p>
          <p style="max-width: 35vh; margin: 3px;">
            정보: {valueeee[tacticIndex].info}</p>
            <div class="rating gap-1" >
              <a style="margin: 3px;">추천하기</a>
              <input on:click={postRecommend}  type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
            </div>
      <div class="divider"></div>
      <button class="btn" on:click={retryClick}>다시 고르기</button>
<!-- 댓글작성 및 뷰 부분 -->
<div class="divider"></div>

<div class="form-control">
  <div class="input-group">
    <input bind:value={username} type="text" placeholder="닉네임을 입력해주세요" class="input input-bordered" />
    <button on:click={() => commentPostCall = createComment()} class="btn btn-square">
      작성
    </button>
  </div>
  <textarea bind:value={contents} cols="30" rows="1" placeholder="내용을 입력해주세요" class="textarea textarea-bordered" 
  oninput='this.style.height = ""; this.style.height = this.scrollHeight + "px"'
  style="resize: none; padding: 8px;  max-height: 200px;"></textarea>
</div>
<div class="divider"></div>
{#await commentCall}
{:then comments} <!-- 정상 종료 후 처리 -->
{#each comments as commentValue} 
<p style="padding: 2vm;"> {commentValue.username}</p>
<div class="chat chat-start">
  <div class="chat-bubble" style="max-width: 200px;">{commentValue.contents}</div>
</div>
{/each}
{/await}

<!-- 댓글작성 및 뷰 부분 -->

    </div>
</div>
{/if}
{/if}
{/if}


{#if valueeee[tacticIndex]}
{#if valueeee[tacticIndex].position == "수비"}
<!-- 수비진형 -->
{#if detailPage2}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">

        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">


              <!-- 후열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50" style="margin-top: 7vh;">
              <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[3].level}</span> 
              <div class="w-20 h-20 rounded-lg">
                <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[3].id]}>
              </div>
              </div>

              <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[4].level}</span> 
              <div class="w-20 h-20 rounded-lg">
                <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[4].id]}>
              </div>
              </div>
            </div>

                <!-- 전열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50 p-6">

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[0].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                  <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[0].id]}>
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[1].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                  <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[1].id]}>
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[2].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                  <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[2].id]}>
                </div>
                </div>

            </div>
            </div>
          </div>
          <div class="divider"></div>
          <p style="margin: 1px;">제목: {valueeee[tacticIndex].title}</p>
          <p style="margin: 1px;">포지션: {valueeee[tacticIndex].position}</p>
          <p style="margin: 1px;">전투력: {valueeee[tacticIndex].power}</p>
          <p style="max-width: 35vh; margin: 3px;">
            정보: {valueeee[tacticIndex].info}</p>
            <div class="rating gap-1" >
              <a style="margin: 3px;">추천하기</a>
              <input on:click={postRecommend}  type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
            </div>
      <div class="divider"></div>
      <button class="btn" on:click={retryClick}>다시 고르기</button>
<!-- 댓글작성 및 뷰 부분 -->
      <div class="divider"></div>

      <div class="form-control">
        <div class="input-group">
          <input bind:value={username} type="text" placeholder="닉네임을 입력해주세요" class="input input-bordered" />
          <button on:click={() => commentPostCall = createComment()} class="btn btn-square">
            작성
          </button>
        </div>
        <textarea bind:value={contents} cols="30" rows="1" placeholder="내용을 입력해주세요" class="textarea textarea-bordered" 
        oninput='this.style.height = ""; this.style.height = this.scrollHeight + "px"'
        style="resize: none; padding: 8px;  max-height: 200px;"></textarea>
      </div>
      <div class="divider"></div>
      {#await commentCall}
      {:then comments} <!-- 정상 종료 후 처리 -->
      {#each comments as commentValue} 
      <p style="padding: 2vm;"> {commentValue.username}</p>
      <div class="chat chat-start">
        <div class="chat-bubble" style="max-width: 200px;">{commentValue.contents}</div>
      </div>
      {/each}
      {/await}
      
<!-- 댓글작성 및 뷰 부분 -->

    </div>
</div>
{/if}
{/if}
{/if}


{#if valueeee[tacticIndex]}
{#if valueeee[tacticIndex].position == "돌격"}
<!-- 돌격진형 -->
{#if detailPage3}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">

        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">


              <!-- 후열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50" style="margin-top: 17vh;">
          
              <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[4].level}</span> 
              <div class="w-20 h-20 rounded-lg">
                <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[4].id]}>
              </div>
              </div>
            </div>

                <!-- 전열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50 p-6">

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[0].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                  <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[0].id]}>
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[1].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                  <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[1].id]}>
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[2].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                  <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[2].id]}>
                </div>
                </div>
                <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[3].level}</span> 
              <div class="w-20 h-20 rounded-lg">
                <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[3].id]}>
              </div>
              </div>
            </div>
            </div>
          </div>
          <div class="divider"></div>
          <p style="margin: 1px;">제목: {valueeee[tacticIndex].title}</p>
          <p style="margin: 1px;">포지션: {valueeee[tacticIndex].position}</p>
          <p style="margin: 1px;">전투력: {valueeee[tacticIndex].power}</p>
          <p style="max-width: 35vh; margin: 3px;">
            정보: {valueeee[tacticIndex].info}</p>
            <div class="rating gap-1" >
              <a style="margin: 3px;">추천하기</a>
              <input on:click={postRecommend}  type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
            </div>
      <div class="divider"></div>
      <button class="btn" on:click={retryClick}>다시 고르기</button>
<!-- 댓글작성 및 뷰 부분 -->
<div class="divider"></div>

<div class="form-control">
  <div class="input-group">
    <input bind:value={username} type="text" placeholder="닉네임을 입력해주세요" class="input input-bordered" />
    <button on:click={() => commentPostCall = createComment()} class="btn btn-square">
      작성
    </button>
  </div>
  <textarea bind:value={contents} cols="30" rows="1" placeholder="내용을 입력해주세요" class="textarea textarea-bordered" 
  oninput='this.style.height = ""; this.style.height = this.scrollHeight + "px"'
  style="resize: none; padding: 8px;  max-height: 200px;"></textarea>
</div>
<div class="divider"></div>
{#await commentCall}
{:then comments} <!-- 정상 종료 후 처리 -->
{#each comments as commentValue} 
<p style="padding: 2vm;"> {commentValue.username}</p>
<div class="chat chat-start">
  <div class="chat-bubble" style="max-width: 200px;">{commentValue.contents}</div>
</div>
{/each}
{/await}

<!-- 댓글작성 및 뷰 부분 -->

    </div>
</div>
{/if}
{/if}
{/if}



{#if valueeee[tacticIndex]}
{#if valueeee[tacticIndex].position == "저격"}
<!-- 저격진형 -->
{#if detailPage4}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">

        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
            <div class="carousel-item">

                <!-- 후열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50 p-6">

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[1].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                  <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[1].id]}>
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[2].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                  <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[2].id]}>
                </div>
                </div>

                <div class="avatar indicator">
                    <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[3].level}</span> 
                <div class="w-20 h-20 rounded-lg">
                  <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[3].id]}>
                </div>
                </div>
                <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[4].level}</span> 
              <div class="w-20 h-20 rounded-lg">
                <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[4].id]}>
              </div>
              </div>
            </div>

              <!-- 전열 세로묶음 -->
            <div class="flex flex-col w-full border-opacity-50" style="margin-top: 15vh;">
          
              <div class="avatar indicator">
                  <span class="indicator-item badge badge-neutral-focus">LV.{valueeee[tacticIndex].soulCharacterTacticResponseDtos[0].level}</span> 
              <div class="w-20 h-20 rounded-lg">
                <img src={soulImgIndex[valueeee[tacticIndex].soulCharacterTacticResponseDtos[0].id]}>
              </div>
              </div>
          

            </div>
            </div>
          </div>
          <div class="divider"></div>
          <p style="margin: 1px;">제목: {valueeee[tacticIndex].title}</p>
          <p style="margin: 1px;">포지션: {valueeee[tacticIndex].position}</p>
          <p style="margin: 1px;">전투력: {valueeee[tacticIndex].power}</p>
          <p style="max-width: 35vh; margin: 3px;">
            정보: {valueeee[tacticIndex].info}</p>
            <div class="rating gap-1" >
              <a style="margin: 3px;">추천하기</a>
              <input on:click={postRecommend}  type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
            </div>
      <div class="divider"></div>
      <button class="btn" on:click={retryClick}>다시 고르기</button>
<!-- 댓글작성 및 뷰 부분 -->
<div class="divider"></div>

<div class="form-control">
  <div class="input-group">
    <input bind:value={username} type="text" placeholder="닉네임을 입력해주세요" class="input input-bordered" />
    <button on:click={() => commentPostCall = createComment()} class="btn btn-square">
      작성
    </button>
  </div>
  <textarea bind:value={contents} cols="30" rows="1" placeholder="내용을 입력해주세요" class="textarea textarea-bordered" 
  oninput='this.style.height = ""; this.style.height = this.scrollHeight + "px"'
  style="resize: none; padding: 8px;  max-height: 200px;"></textarea>
</div>
<div class="divider"></div>
{#await commentCall}
{:then comments} <!-- 정상 종료 후 처리 -->
{#each comments as commentValue} 
<p style="padding: 2vm;"> {commentValue.username}</p>
<div class="chat chat-start">
  <div class="chat-bubble" style="max-width: 200px;">{commentValue.contents}</div>
</div>
{/each}
{/await}

<!-- 댓글작성 및 뷰 부분 -->

    </div>
</div>
{/if}
{/if}
{/if}

{/await}
