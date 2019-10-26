import {mixin as clickaway} from 'vue-clickaway';

export default {
  name: 'ContextMenu',
  mixins: [clickaway],
  props: {
    id: {
      type: String,
      default: 'default-ctx'
    }
  },
  data() {
    return {
      align: 'left',
      ctxTop: 0,
      ctxLeft: 0,
      ctxVisible: false,
    }
  },
  methods: {

    /*
     * this function handles some cross-browser compat issues
     * thanks to https://github.com/callmenick/Custom-Context-Menu
     */
    setPositionFromEvent(e) {
      e = e || window.event

      const scrollingElement =
        document.scrollingElement || document.documentElement

      if (e.pageX || e.pageY) {
        this.ctxLeft = e.pageX + 5;
        this.ctxTop = e.pageY - scrollingElement.scrollTop + 5;
      } else if (e.clientX || e.clientY) {
        this.ctxLeft = e.clientX + scrollingElement.scrollLeft + 5;
        this.ctxTop = e.clientY + scrollingElement.scrollTop + 5;
      }


      this.$nextTick(() => {
        const menu = this.$el;
        const minHeight = (menu.style.minHeight || menu.style.height)
          .replace('px', '') || 32;
        const minWidth = (menu.style.minWidth || menu.style.width)
          .replace('px', '') || 32;
        const scrollHeight = menu.scrollHeight || minHeight
        const scrollWidth = menu.scrollWidth || minWidth

        const largestHeight = window.innerHeight - scrollHeight - 25;
        const largestWidth = window.innerWidth - scrollWidth - 25;

        if (this.ctxTop > largestHeight) this.ctxTop = largestHeight;
        if (this.ctxLeft > largestWidth) this.ctxLeft = largestWidth;
      })
    },

    open(e) {
      this.ctxVisible = true;
      this.setPositionFromEvent(e);
      this.$el.setAttribute('tab-index', -1);
    },
    kill() {
      if (this.ctxVisible) this.ctxVisible = false;
    }
  },
  computed: {
    ctxStyle() {
      return {
        'display': this.ctxVisible ? 'block' : 'none',
        'top': (this.ctxTop || 0) + 'px',
        'left': (this.ctxLeft || 0) + 'px'
      }
    }
  }
}
