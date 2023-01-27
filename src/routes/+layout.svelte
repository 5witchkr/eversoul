<script>
  import "../app.css";
</script>

<div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <div class="navbar bg-base-100">
      <div class="navbar-start">

        <label tabindex="0" for="my-drawer" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>

      </div>
      <div class="navbar-center">
        <a href="/" class="btn btn-ghost normal-case text-xl">에버소울 공략</a>
      </div>
      <div class="navbar-end">
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li><a href="/tier">정령 티어표</a></li>
          </ul>
        </div>
      </div>
    </div>

    <slot></slot>

  </div> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <ul class="menu p-4 w-80 bg-base-100 text-base-content" style="max-width: 55vw;">
      <!-- Sidebar content here -->
      <li><a href="/stage">스테이지 공략</a></li>
      <li><a href="/story">인연스토리 공략</a></li>
      <li><label for="my-modal2">문의사항 접수</label></li>
    </ul>
  </div>
</div>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal2" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">피드백은 언제나 환영!</h3>
    <p class="py-4">개선사항이나 요구사항이 있으면 언제든 알려주세요!</p>
    <p class="py-4">Gmail: 5witchkrmailer@gmail.com</p>
    <div class="modal-action">
      <label for="my-modal2" class="btn">확인</label>
    </div>
  </div>
</div>
