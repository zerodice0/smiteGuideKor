<script>
 let roles = [
   {name: "Hunter", 
      icon: "https://bulma.io/images/placeholders/96x96.png", 
      shortDescription: "기본 공격에 특화된 원거리 딜러", 
      description: "기본 공격력에 중점을 두고 빌드업을 하는 포지션으로, 크리티컬 찬스, 공격 속도, 공격력, HP 흡수에 중점을 두게 됩니다. "
            +"약간의 CC기를 가지고 있으나 CC기를 활용하기보다는, 게임 후반에 폭발적인 데미지를 가하는 역할을 맡게 됩니다. "
            +"따라서 게임 초반부에는 데미지가 약한 경향이 있습니다. "},
   {name: "Mage", 
      icon: "https://bulma.io/images/placeholders/96x96.png", 
      shortDescription: "마법 공격에 특화된 원거리 딜러", 
      description: "마법 공격력에 중점을 두고 빌드업을 하는 포지션으로, 원거리에서 빠르게 적을 처리하는 역할을 합니다. "
            +"대부분은 원거리에서 적을 공격하기 위해 마법을 사용하지만, 일부는 근거리 공격에 집중되어있는 경우도 있습니다.(예: He Bo)"
            +"일반적으로 CC기가 부족하며 탈출기가 없는 경우가 많아서, 천천히 움직여야하는 경향이 있습니다. "},
   {name: "Guardian", 
      icon: "https://bulma.io/images/placeholders/96x96.png", 
      shortDescription: "방어에 특화된 탱커", 
      description: "탱커는 보통 사이즈가 크고, 공격력이 낮은 대신 방어력이 높은 포지션입니다. "
            +"서포터의 역할을 맡는 경우가 대부분이며 1) 목숨을 바쳐서 팀원이 살아남을 수 있도록 하고, "
            +"2) 다른 팀원의 킬을 빼앗지 않아야 합니다. "
            +"가디언들은 많은 CC기를 보유하고 있습니다. "},
   {name: "Warrior", 
      icon: "https://bulma.io/images/placeholders/96x96.png", 
      shortDescription: "공/방 균형을 맞춘 전천후 포지션", 
      description: "공격과 방어력을 갖춘 전천후 포지션으로, 일반적으로 높은 능력을 발휘합니다. "
            +"일반적으로 기본 공격보다는 높은 공격력을 가진 어빌리티에 초점이 맞춰져 있습니다. "
            +"가디언만큼은 아니지만 적당한 CC기를 갖추고 있습니다. "},
   {name: "Assasin", 
      icon: "https://bulma.io/images/placeholders/96x96.png", 
      shortDescription: "폭발적인 근접 공격이 특징", 
      description: "폭발적인 근거리 딜을 가지고 았는 포지션입니다. "
            +"방어력에 신경을 거의 쓰지 않으며, 대상을 최대한 빨리 죽이는 데 중점을 둡니다. "
            +"일반적으로 CC기가 없으며, 공격력에 집중한 빌드업을 합니다. "
            +"Bakasura, Kali, Mercury와 같은 신들은 기본 공격에 집중을 둔 빌드업을 하며, "
            +"Loki, Fenrir, Thanatos와 같은 신들은 어빌리티에 집중을 둔 빌드업을 합니다."}
 ]
</script>

<main>
  <section class="hero is-info">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Role/Position
        </h1>
        <h2 class="subtitle">
          롤과 포지션에 대해 알아봅시다.
        </h2>
      </div>
    </div>
  </section>
  
  <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
    <ul>
      <li class="is-active"><a>롤</a></li>
      <li><a>포지션</a></li>
    </ul>
  </nav>

  <div class="tile is-ancestor">
    <div class="tile is-parent is-vertical">
      <article class="tile is-child is-info notification">
        <p class="title">롤</p>
        <p class="subtitle">일반적으로 저우스(JOUST)나 아레나(ARENA)와 같은 모드에서 사용되는 롤에 대해 알아봅시다.</p>

        <div>
          {#each roles as role}
          <div class="card">
            <div class="card-content">
              <div class="content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4 has-text-centered">{role.name}</p>
                    <p class="subtitle is-6 has-text-centered">{role.shortDescription}</p>
                  </div>
                </div>
                <p class="subtitle is-6 has-text-left">{role.description}</p>
              </div>
            </div>
          </div>
          {/each}
        </div>

      </article>
    </div>
  </div>
</main>