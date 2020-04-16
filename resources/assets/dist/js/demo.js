/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($) {
  'use strict'

  var $sidebar   = $('.control-sidebar')
  var $container = $('<div />', {
    class: 'p-3'
  })

  $sidebar.append($container)

  var navbar_dark_skins = [
    'bg-primary',
    'bg-info',
    'bg-success',
    'bg-danger'
  ]

  var navbar_light_skins = [
    'bg-warning',
    'bg-white',
    'bg-gray-light'
  ]

  $container.append(
    '<h5>自定义主题</h5><hr class="mb-2"/>'
    + '<h6>导航条</h6>'
  )

  var $navbar_variants        = $('<div />', {
    'class': 'd-flex'
  })
  var navbar_all_colors       = navbar_dark_skins.concat(navbar_light_skins)
  var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function (e) {
    $(this).html('<i class="fa fa-check"></i>').siblings().html('')
    var color = $(this).data('color')
    console.log('Adding ' + color)
    var $main_header = $('.main-header')
    $main_header.removeClass('navbar-dark').removeClass('navbar-light')
    navbar_all_colors.map(function (color) {
      $main_header.removeClass(color)
    })

    if (navbar_dark_skins.indexOf(color) > -1) {
      $main_header.addClass('navbar-dark')
      console.log('AND navbar-dark')
    } else {
      console.log('AND navbar-light')
      $main_header.addClass('navbar-light')
    }

    $main_header.addClass(color)
  }, 'navbar')

  $navbar_variants.append($navbar_variants_colors)

  $container.append($navbar_variants)

  var $checkbox_container = $('<div />', {
    'class': 'custom-control custom-checkbox mb-4'
  })
  var $navbar_border = $('<input />', {
    type   : 'checkbox',
    value  : 1,
    id     : 'navbarBorderCheck',
    checked: $('.main-header').hasClass('border-bottom'),
    'class': 'custom-control-input'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom')
    } else {
      $('.main-header').removeClass('border-bottom')
    }
  })
  $checkbox_container.append($navbar_border)
  $checkbox_container.append('<label class="custom-control-label" for="navbarBorderCheck">导航条边框</label>')
  $container.append($checkbox_container)


  var sidebar_colors = [
    'bg-primary',
    'bg-warning',
    'bg-info',
    'bg-danger',
    'bg-success'
  ]

  var sidebar_skins = [
    'sidebar-dark-primary',
    'sidebar-dark-warning',
    'sidebar-dark-info',
    'sidebar-dark-danger',
    'sidebar-dark-success',
    'sidebar-light-primary',
    'sidebar-light-warning',
    'sidebar-light-info',
    'sidebar-light-danger',
    'sidebar-light-success'
  ]

  $container.append('<h6>暗侧边栏</h6>')
  var $sidebar_variants = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($sidebar_variants)
  $container.append(createSkinBlock(sidebar_colors, function () {
    $(this).html('<i class="fa fa-check"></i>').siblings().html('')
    var color         = $(this).data('color')
    var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '')
    var $sidebar      = $('.main-sidebar')
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class)
  }, 'darkSidebar'))

  $container.append('<h6>亮侧边栏</h6>')
  var $sidebar_variants = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($sidebar_variants)
  $container.append(createSkinBlock(sidebar_colors, function () {
    $(this).html('<i class="fa fa-check"></i>').siblings().html('')
    var color         = $(this).data('color')
    var sidebar_class = 'sidebar-light-' + color.replace('bg-', '')
    var $sidebar      = $('.main-sidebar')
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class)
  }, 'lightSidebar'))

  var logo_skins = navbar_all_colors
  $container.append('<h6>LOGO</h6>')
  var $logo_variants = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($logo_variants)
  var $clear_btn = $('<a />', {
    href: 'javascript:void(0)',
    'class': 'text-center',
    width: '40px',
  }).html('<i class="fa fa-trash"></i>').on('click', function () {
    $(this).siblings('.elevation-2').html('')
    var $logo = $('.brand-link')
    logo_skins.map(function (skin) {
      $logo.removeClass(skin)
    })
  })
  $container.append(createSkinBlock(logo_skins, function () {
    $(this).html('<i class="fa fa-check"></i>').siblings('.elevation-2').html('')
    var color = $(this).data('color')
    var $logo = $('.brand-link')
    logo_skins.map(function (skin) {
      $logo.removeClass(skin)
    })
    $logo.addClass(color)
  }, 'logo').append($clear_btn))

  function createSkinBlock(colors, callback, tag) {
    var $block = $('<div />', {
      'class': 'd-flex flex-wrap mb-3'
    })

    colors.map(function (color) {
      var $color = $('<div />', {
        'class': (typeof color === 'object' ? color.join(' ') : color) + ' elevation-2 text-center'
      })

      $block.append($color)

      $color.data('color', color)

      $color.css({
        width       : '40px',
        height      : '20px',
        lineHeight  : '20px',
        borderRadius: '25px',
        marginRight : 10,
        marginBottom: 10,
        opacity     : 0.8,
        cursor      : 'pointer'
      })

      $color.hover(function () {
        $(this).css({ opacity: 1 }).removeClass('elevation-2').addClass('elevation-4')
      }, function () {
        $(this).css({ opacity: 0.8 }).removeClass('elevation-4').addClass('elevation-2')
      })

      var $tagClass,tagColor
      switch (tag) {
        case 'navbar':
            $tagClass = $('.main-header')
            tagColor = color
            break;
        case 'darkSidebar':
            $tagClass = $('.main-sidebar')
            tagColor = 'sidebar-dark-' + color.replace('bg-', '')
            break;
        case 'lightSidebar':
            $tagClass = $('.main-sidebar')
            tagColor = 'sidebar-light-' + color.replace('bg-', '')
            break;
        case 'logo':
            $tagClass = $('.brand-link')
            tagColor = color
            break;
      }
      $color.html($tagClass.hasClass(tagColor) ? '<i class="fa fa-check"></i>' : '')

      if (callback) {
        $color.on('click', callback)
      }
    })

    return $block
  }
})(jQuery)
