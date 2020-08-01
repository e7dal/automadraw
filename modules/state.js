export default {
  C: null,
  art: null,
  mode: 'draw',
  act: 'life',
  px: 16,
  cols: 40,
  rows: 30,
  nudge: 1,
  big_nudge: 2,
  show_grid: true,
  mode_cache: null,
  crop_cache_art: null,
  crop_cache_dims: null,
  crop_cache_resize: null,
  draw_cursor: [4, 4, 2, 2],
  auto_cursor: [0, 0, 30, 20],
  flow_choice: 'south',
  ant_position: [0, 0],
  ant_dir: 'north',
  show_help: true,
  dom: {
    $cursor_read: null,
  },
  flow_arrow_sprite: null,
  // keymap
  km: {},
  // Config (unlikely to change)
  actions: ['life', 'flow', 'ant'],
  render_border: 3,
  cursor_border_width: 2,
  cursor_border_color: '#f02d7d',
  auto_cursor_border_color: '#19d719',
  canvas_border_color: '#222',
  grid_color: 'rgba(0,0,0,0.1)',
}
