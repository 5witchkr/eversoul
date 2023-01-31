<script>
  let apidomain = `https://eversoul.duckdns.org`;

async function createPost() {
		const res = await fetch(`${apidomain}/api/stagetactic/tactic`, {
            headers:{'Content-Type':'application/json'},
            //cookie
			method: 'POST',
			body: JSON.stringify({
        title: requestTitle,
        location: requestLocation.split(" ")[0],
        step: requestStep.split(" ")[0],
        position: requestPosition.split(" ")[0],
        power: requestPower,
        info: requestInfo,
        soulCharacters: requestSoulsWithLevel
		})
		})
        const postStatus = await res.status;
        if (postStatus == 201) {    
            successCall = true;
        } else{
        alert("입력값을 확인해주세요 (정령은 중복입력 할 수 없습니다!)");
    }
	}
    let successCall = false;

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
    let positions = [
        "기본","수비","돌격","저격"
    ]
        let requestLocation;
        let requestStep;
        let requestPosition;
        let requestPower;
        let requestInfo="";
        let requestTitle="";
        let requestSoulsWithLevel = [];


        let soulcharacters = ['아드리안','캐서린', '탈리아','재클린',
     '페트라', '비올레트','지호','메피', '비비안', '린지',
      '나이아', '클레르', '클로이','도라', '미리암', '프림', '셰리',
       '미카','시하','레베카', '클라라', '하루', '플린', '니니',
        '에루샤','아야메', '순이', '아이라', '르네', '니콜','제이드'];

        let selectedSoul = '';
        let selectedSouls ='';
        let inputSoulLevel =0;
        let inputSoulName ='';
        let maxSoulsValue = 0;

        function resetSelectClick() {
            selectedSouls = '';
            selectedSoul = ''
            maxSoulsValue = 0;
            requestSoulsWithLevel=[]
            }
        function addSoulClick(){
            if (maxSoulsValue > 4) {
                return alert("사용 정령은 최대 5개입니다.")
            }
            if (inputSoulLevel < 1 || inputSoulName=='') {
                return alert("레벨과 정령이름을 전부 입력해주세요.");
            }
            selectedSouls += "Lv"+inputSoulLevel;
            selectedSouls += inputSoulName+" ";
            requestSoulsWithLevel.push({"soulId": soulcharacters.indexOf(inputSoulName)+1, "level": inputSoulLevel})
            maxSoulsValue += 1;
        }
</script>

<svelte:head>
    <title>스테이지 공략 작성페이지</title> 
</svelte:head>


{#if !successCall}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">
    <div class="form-control w-300 max-w-xs">
        <h1>공략 작성 페이지입니다.</h1>
        <label class="label">
          <span class="label-text">지역 선택란 (필수)</span>
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
          <span class="label-text">단계 선택란 (필수)</span>
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
        <span class="label-text">공략 제목(필수)</span>
        <span class="label-text-alt">Title</span>
      </label>
      <input bind:value={requestTitle} placeholder="Input Title" class="input input-bordered w-full max-w-xs" />

      <div class="divider divider-horizontal"> </div>

      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">포지션 선택란 (필수)</span>
          <span class="label-text-alt">Position</span>
        </label>
        <select class="select select-bordered"  bind:value={requestPosition}>
          <option disabled selected>Pick Position</option>
          {#each positions as position}  <!-- 반복 횟수 변수 idx 선언 -->
          <option>{position} 진형</option>   <!-- 배열의 요소를 li로 출력 -->
        {/each}
        </select>
      </div>

      <div class="divider divider-horizontal"> </div>

      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">전투력 입력란</span>
          <span class="label-text-alt">Power</span>
        </label>
        <input bind:value={requestPower} type="number" placeholder="숫자로만 입력해주세요!" class="input input-bordered w-full max-w-xs" />
  
      </div>
      <label class="label">
        <span class="label-text">정령 선택란 (필수 5개)</span>
        <span class="label-text-alt">Soul</span>
      </label>
      <div class="form-control">
        <input bind:value={inputSoulLevel} type="number" placeholder="정령 레벨" class="input input-bordered w-full max-w-xs" />
        <div class="input-group">
          <select class="select select-bordered" bind:value={inputSoulName}>
            <option disabled selected>순서대로 골라주세요!</option>
            {#each soulcharacters as soulcharacter}  <!-- 반복 횟수 변수 idx 선언 -->
            <option>{soulcharacter}</option>   <!-- 배열의 요소를 li로 출력 -->
          {/each}
          </select>
          <button on:click={addSoulClick} class="btn">추가하기</button>
        </div>
      </div>
      <div class="divider"></div>

      <label class="label">
        사용된 정령
        <button on:click={resetSelectClick} >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </label>
      <textarea class="textarea textarea-bordered" placeholder="Bio" readonly> {selectedSouls}</textarea>


      <div class="divider"></div>
      <textarea bind:value={requestInfo} class="textarea textarea-bordered" placeholder="어떤 전략을 사용했나요?"></textarea>
      <div class="divider"></div>

        <button on:click={createPost} class="btn btn-block">
            공략글 작성 완료</button>
</div>
</div>
{/if}


{#if successCall}
<div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">공략 작성 성공!</h1>
        <p class="py-6">스테이지 공략의 공유 및 기여를 해주셔서 정말 감사합니다!</p>
        <a href="/stage"><button class="btn btn-primary">확인</button></a>
      </div>
    </div>
  </div>
{/if}