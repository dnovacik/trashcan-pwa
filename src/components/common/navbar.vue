<template>
  <div id="navbar">
    <nav>
      <ul id="sections">
        <router-link to="/trashit" tag="li" class="section" exact>
          <div class="menu-section">
            <div class="icon-container">
              <pin-icon class="icon" />
            </div>
            <div class="section-name">Trash it!</div>
          </div>
        </router-link>
        <router-link to="/info" tag="li" class="section" exact>
          <div class="menu-section">
            <div class="icon-container">
              <info-icon class="icon" />
            </div>
            <div class="section-name">Know it!</div>
          </div>
        </router-link>
        <router-link to="/setit" tag="li" class="section" exact>
          <div class="menu-section">
            <div class="icon-container">
              <settings-icon class="icon" />
            </div>
            <div class="section-name">Set it!</div>
          </div>
        </router-link>
      </ul>
    </nav>
  </div>
</template>

<script>
import pinIcon from "@/assets/pin.svg";
import infoIcon from "@/assets/info-md.svg";
import settingsIcon from "@/assets/settings-md.svg";

export default {
  name: "navBar",
  components: {
    pinIcon,
    infoIcon,
    settingsIcon
  }
};
</script>

<style lang="scss">
#navbar {
  background-color: #fff;
  position: fixed;
  bottom: 0;
  height: 70px;
  width: 100%;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid rgb(235, 232, 232);

  nav {
    width: 100%;

    #sections {
      list-style: none;
      display: flex;
      justify-content: space-evenly;

      li {
        display: inline-block;
        padding: 0;
        color: rgb(235, 232, 232);
        margin-left: 15px;
        margin-right: 15px;
        font-size: 0.8em;
        cursor: pointer;

        .menu-section {
          width: auto;
          height: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .icon {
          height: 25px;
          width: auto;

          path {
            fill: rgb(235, 232, 232);
          }

          circle {
            stroke: #fff;
          }
        }

        &.router-link-active {
          color: #42b983;

          .icon {
            path {
              fill: #42b983;
            }

            circle {
              stroke: #42b983;
            }
          }
        }

        &:hover {
          .section-name {
            color: #42b983;
          }

          .icon {
            path {
              fill: #42b983;
            }

            circle {
              stroke: #42b983;
            }
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;

      #sections {
        justify-content: space-evenly;
      }
    }
  }
}
</style>