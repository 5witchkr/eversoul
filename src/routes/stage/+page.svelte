<script>
    // async 함수 정의
    async function getPosts(){
        // 원격지 데이터를 fetch로 가져오기
        const res = await fetch("https://pickban.duckdns.org/api/recommend?team=B&line=mid&bans=124_51_114&emBans=90_47&picks=91_134&emPicks=147_73"); 
        const json = await res.json(); // fetch 결과를 JSON 객체로 변환
        return json;                   // JSON 객체 반환
    }
    let promisePosts = getPosts();     // 최초 호출
</script>

<main>
    <div class="alert alert-info shadow-lg">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>New software update available.</span>
        </div>
      </div>
    <!-- 버튼 클릭 시 getPosts 함수를 호출하여 원격지 데이터 가져오기 -->
    <button on:click={() => promisePosts = getPosts()}> 포스트 리스트 가져오기 </button>
    <table border="1">
        <thead>
            <th>id</th>
            <th>사용자</th>
            <th>타이틀</th>    
            <th>내용</th>
        </thead>
        <tbody>
        {#await promisePosts} <!-- 동작 중일 때 처리 -->
            <tr>
                <td colspan=4>
                가져오는 중 잠시만 기다리세요
                </td>
            </tr>  
        {:then posts} <!-- 정상 종료 후 처리 -->
            {#each posts as post} <!-- fetch 결과의 데이터 개수만큼 반복 실행 -->
                <tr> <!-- tr, td 엘리먼트로 출력 -->
                    <td>{post.championTier}</td>
                    <td>{post.championId}</td>
                </tr>
            {/each}
        {/await}        
        </tbody>
    </table>
</main>

