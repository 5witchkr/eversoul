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

</script>

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
          <a href="/stage-answer"><button class="btn">추천조합 보기</button></a>
    </div>
</div>