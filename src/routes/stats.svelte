<script>
  let generalStats = [
    {name: "HP", max: "5500", description: "0이 되면 영웅이 죽고, 일정시간 뒤에 부활한다."},
    {name: "MP", max: "4000", description: "기술을 사용할 때마다 소모된다."},
    {name: "Physical Defense", max: "325", description: "이 스테이터스는 물리 공격을 받았을 때 데미지를 줄여준다. 타워, 피닉스, 타이탄, 미니언 등의 NPC는 모두 물리 공격을 가한다."},
    {name: "Magical Defese", max: "325", description: "이 스테이터스는 마법 공격을 받았을 때 데미지를 줄여준다."},
    {name: "Cooldown Reduction", max: "40%", description: "CDR. 이 스테이터스는 쿨다운 시간을 줄여준다."},
    {name: "HP5", max: "100", description: "5초마다 회복되는 HP의 양."},
    {name: "MP5", max: "100", description: "5초마다 회복되는 MP의 양."},
    {name: "Movement", max: "1000", description: "이동속도"},
    {name: "Attack Speed", max: "2.5", description: "1초당 기본 공격을 하는 횟수를 의미한다. 예를 들어 1이면 1초당 1회, 2이면 1초당 2회를 공격한다."}
  ]

  let physicalStats = [
    {name: "Physical Power", max: "400", description: "물리 타입 신의 기본 공격력 및 어빌리티 공격력이 증가한다."},
    {name: "Physical Penetration", max: "50", description: "물리 관통. 물리 방어력이 높은 대상에게 주는 데미지가 증가한다."},
    {name: "Physical Lifesteal", max: "100", description: "물리 HP 흡수. 상대방을 물리 타입으로 공격할 때마다 회복한다. 이 스탯은 기본공격에만 적용된다."},
    {name: "Critical Chance", max: "100", description: "크리티컬 발생 확률. 물리 타입 신만 크리티컬 공격이 발생한다."}
  ]

  let magicalStats = [
    {name: "Magical Power", max: "900", description: "마법 타입 신의 기본 공격력 및 어빌리티 공격력이 증가한다."},
    {name: "Magical Penetration", max: "50", description: "마법 관통. 마법 방어력이 높은 대상에게 주는 데미지가 증가한다."},
    {name: "Magical Lifesteal", max: "100", description: "마법 HP 흡수. 상대방을 마법 타입으로 공격할 때마다 회복한다. 물리 HP 흡수와는 다르게, 마법 HP 흡수는 모든 공격에 적용된다."}
  ]
</script>

<style>
  .stats-name {
    min-width: 200px;
  }

  .stats-max {
    min-width: 80px;
  }
</style>

<div>
  <div class="tile is-parents">
    <div class="tile is-child notification is-primary">
      <p class="title">General Stats</p>
      <p class="subtitle">일반적인 스탯에 대해서 설명합니다.</p>
      <div class="contianer">
        <table class="table is-fullwidth is-striped is-bordered">
          <thead>
            <tr>
              <th class="stats-name has-text-centered">스탯 명</th>
              <th class="stats-max has-text-centered">최대치</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            {#each generalStats as stats}
            <tr>
              <th class="has-text-centered">{stats.name}</th>
              <th class="has-text-centered">{stats.max}</th>
              <td>{stats.description}</td>
            </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="tile is-parent">
    <div class="tile is-child notification is-danger">
      <p class="title">Physical Stats</p>
      <p class="subtitle">물리 공격과 관련된 스탯에 대해서 설명합니다.</p>
      <div class="container">
        <table class="table is-fullwidth is-striped is-bordered">
          <thead>
            <tr>
              <th class="stats-name has-text-centered">스탯 명</th>
              <th class="stats-max has-text-centered">최대치</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            {#each physicalStats as stats}
            <tr>
              <th class="has-text-centered">{stats.name}</th>
              <th class="has-text-centered">{stats.max}</th>
              <td>{stats.description}</td>
            </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <div class="tile is-parent">
    <div class="tile is-child notification is-info">
      <p class="title">Magical Stats</p>
      <p class="subtitle">마법 공격과 관련된 스탯에 대해서 설명합니다.</p>
      <div class="container">
        <table class="table is-fullwidth is-striped is-bordered">
          <thead>
            <tr>
              <th class="stats-name has-text-centered">스탯 명</th>
              <th class="stats-max has-text-centered">최대치</th>
              <th>설명</th>
            </tr>
          </thead>
          <tbody>
            {#each magicalStats as stats}
            <tr>
              <th class="has-text-centered">{stats.name}</th>
              <th class="has-text-centered">{stats.max}</th>
              <td>{stats.description}</td>
            </tr>
            {/each}
          </tbody>
        </table>
      </div>
    </div>
  </div>

</div>