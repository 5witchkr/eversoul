<script>

    let name;
    name = 'jiho'

    let data

    let SStiers = ['jiho','mephistopeles', 'vivienne', 'linzy', 'naiah', 'claire', 'chloe'];
    let Stiers = ['dora', 'miriam', 'prim', 'cherrie', 'mica', 'rebecca', 'seeha', 'clara', 'haru', 'flynn', 'nini', 'erusha'];
    let Atiers = ['ayame', 'soonie', 'aira', 'renee', 'nicole'];
    let Btiers = ['jade'];


</script>
<div tabindex="0" class="collapse border border-base-300 bg-base-100 rounded-box"> 
    <div class="collapse-title text-xl font-medium text-center">
      정령 티어표
    </div>
    <div class="collapse-content"> 
        <div class="badge badge-secondary">SSS티어</div>
        <div class="badge badge-error">SS티어</div>
        <div class="badge badge-warning">S티어</div>
        <div class="badge badge-primary">A티어</div>
        <div class="badge badge-info">B티어</div>
    </div>
  </div>
<div class="divider"></div> 
{#each data as value}  <!-- 반복 횟수 변수 idx 선언 -->
<div class="avatar indicator">
    <span class="indicator-item badge badge-secondary">{value.name}</span> 
    <div class="w-20 h-20 rounded-lg">
        <img src="https://eversoul.kakaogames.com/static/character/{value.name}/img-thumb.png">
    </div>
  </div>
{/each}
<div class="divider"></div> 
{#each SStiers as value}  <!-- 반복 횟수 변수 idx 선언 -->
<div class="avatar indicator">
    <span class="indicator-item badge badge-error">{value}</span> 
    <div class="w-20 h-20 rounded-lg">
        <img src="https://eversoul.kakaogames.com/static/character/{value}/img-thumb.png">
    </div>
  </div>
{/each}
<div class="divider"></div> 
{#each Stiers as value}  <!-- 반복 횟수 변수 idx 선언 -->
<div class="avatar indicator">
    <span class="indicator-item badge badge-warning">{value}</span> 
    <div class="w-20 h-20 rounded-lg">
        <img src="https://eversoul.kakaogames.com/static/character/{value}/img-thumb.png">
    </div>
  </div>
{/each}
<div class="divider"></div> 
{#each Atiers as value}  <!-- 반복 횟수 변수 idx 선언 -->
<div class="avatar indicator">
    <span class="indicator-item badge badge-primary">{value}</span> 
    <div class="w-20 h-20 rounded-lg">
        <img src="https://eversoul.kakaogames.com/static/character/{value}/img-thumb.png">
    </div>
  </div>
{/each}
<div class="divider"></div> 
{#each Btiers as value}  <!-- 반복 횟수 변수 idx 선언 -->
<div class="avatar indicator">
    <span class="indicator-item badge badge-info">{value}</span> 
    <div class="w-20 h-20 rounded-lg">
        <img src="https://eversoul.kakaogames.com/static/character/{value}/img-thumb.png">
    </div>
  </div>
{/each}