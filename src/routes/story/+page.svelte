<script>
      let apidomain = `https://pickban.duckdns.org`;

    let soulCharacters = ['아드리안','캐서린', '탈리아','재클린',
     '페트라', '비올레트','지호','메피', '비비안', '린지',
      '나이아', '클레르', '클로이','도라', '미리암', '프림', '셰리',
       '미카','시하','레베카', '클라라', '하루', '플린', '니니',
        '에루샤','아야메', '순이', '아이라', '르네', '니콜','제이드'];
    
    // mockdata for indexsing soulname
    let soulIndex = ['adrianne','catherine', 'talia','jacqueline',
     'petra', 'violette','jiho','mephistopeles', 'vivienne', 'linzy',
      'naiah', 'claire', 'chloe','dora', 'miriam', 'prim', 'cherrie',
       'mica','seeha','rebecca', 'clara', 'haru', 'flynn', 'nini',
        'erusha','ayame', 'soonie', 'aira', 'renee', 'nicole','jade'];


        let episodes = ['모든 에피소드', '개별 에피소드는 준비중입니다'];

    let soulValue;
    let episodeValue;
    let endingValue;
    let selectPage = true;

    async function getStory(){
        if (typeof soulValue=="undefined" || typeof episodeValue=="undefined" ||
         typeof soulValue=="undefined" || typeof endingValue=="undefined") {
          return ;
        }
        episodeValue = 0;
        let reqSoulValue = soulCharacters.indexOf(soulValue) + 1;
        const res = await fetch(`${apidomain}/api/story/${reqSoulValue}?episode=${episodeValue}&ending=${endingValue}`);
        if(res.status == 200){
            selectPage = !selectPage;
        } else {
            alert("인연스토리 미공개 정령은 준비중입니다.")
        }
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json; 
    }

    let storyCall = getStory();

    async function reloadPage() {
        selectPage = true;
    }
</script>


{#if selectPage}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300">
        <div class="avatar" style="justify-content: center;">
            <div class="w-24 mask mask-hexagon">
                {#if soulValue != "Pick Character"}
                <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[soulCharacters.indexOf(soulValue)]}/img-thumb.png" />
                {/if}
            </div>
          </div>
    <div class="form-control w-300 max-w-xs">
        <label class="label">
          <span class="label-text">정령을 고르세요.</span>
        </label>
        <select class="select select-bordered" bind:value={soulValue}>
          <option disabled selected>Pick Character</option>
          {#each soulCharacters as soulcharacter}  <!-- 반복 횟수 변수 idx 선언 -->
          <option>{soulcharacter}</option>   <!-- 배열의 요소를 li로 출력 -->
        {/each}
        </select>
      </div>
    
      <div class="divider divider-horizontal"> </div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">에피소드를 고르세요.</span>
        </label>
        <select class="select select-bordered" bind:value={episodeValue} >
          <option disabled selected>Pick Episode</option>
          {#each episodes as episode}  <!-- 반복 횟수 변수 idx 선언 -->
          <option>{episode}</option>   <!-- 배열의 요소를 li로 출력 -->
        {/each}
        </select>
      </div>
      <div class="form-control" >
        <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">트루 엔드</span> 
              <input value="TRUE" bind:group={endingValue} type="radio" name="radio-10" class="radio checked:bg-blue-500" checked />
            </label>
          </div>
        <label class="label cursor-pointer">
          <span class="label-text">배드 엔드 (데이터준비중)</span> 
          <input value="BAD" bind:group={endingValue} type="radio" name="radio-10" class="radio checked:bg-red-500"  />
        </label>
      </div>
      <div class="divider"></div>
      <label for="my-modal-3" class="btn" on:click={() => storyCall = getStory()}>인연공략 찾아보기</label>
</div>
</div>
{/if}




{#if !selectPage}
<div class="flex justify-center px-4 py-16 border-t border-base-300">
    <div class="flex flex-col w-300" style="text-align: center;">
        <div class="avatar" style="justify-content: center;">
            <div class="w-24 mask mask-hexagon">
                {#if soulValue != "Pick Character"}
                <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[soulCharacters.indexOf(soulValue)]}/img-thumb.png" />
                {/if}
            </div>
          </div>
          <div style="margin-top: 10px"></div>
          {soulValue}의 TRUE엔드 인연스토리
    <div class="form-control w-300 max-w-xs">
    </div>
    

 <!-- 정상 종료 후 처리 -->
 {#await storyCall}
{:then storys}
{#each storys as story} 
<div class="divider"></div>
<div class="chat chat-start">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full" >
          <img src="https://eversoul.kakaogames.com/static/character/{soulIndex[soulCharacters.indexOf(soulValue)]}/img-thumb.png" />
      </div>
    </div>
    <div class="chat-header">
    </div>
    <div class="chat-bubble">구원자님 {story.orderNumber}번째 질문입니다</div>
  </div>
  <div class="chat chat-end">
    <div class="chat-image avatar">
      <div class="w-10 rounded-full">
      </div>
    </div>
    <div class="chat-bubble">
        {story.storyAnswerResponseDtos[0].title}
    </div>
    <div class="chat-footer opacity-50">
        ({story.storyAnswerResponseDtos[0].orderNumber}번 선택)
      </div>
  </div>
  
{/each}
{/await}
<div class="divider"></div>
<label for="my-modal-3" class="btn" on:click={reloadPage}>다른 인연공략 찾기</label>
</div>
</div>
{/if}

