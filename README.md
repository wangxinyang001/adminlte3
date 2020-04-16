# AdminLTE3 extension for laravel-admin

首先，这本是一个MIT开源项目的副本，原作者针对BUG修复未及时解决，故另起仓库本人修复后发布。

原作者感谢： [pigzzz123/adminlte3](https://github.com/pigzzz123/adminlte3)

这是一个 `laravel-admin` 扩展，为 `laravel-admin` 应用 [AdminLTE3](https://github.com/almasaeed2010/AdminLTE/tree/v3.0.0-alpha.2) 主题。

## 依赖

Laravel-Admin >= 1.7

在高于1.7.3版本的Laravel-Admin中，请注释掉 `config/admin.php` 中以下代码：

`'grid_action_class' => \Encore\Admin\Grid\Displayers\DropdownActions::class`

## 已测试

Laravel 5.8 & Laravel-Admin 1.7.7

## 截图

![screenshot1](https://user-images.githubusercontent.com/24596908/52550386-e4894080-2e12-11e9-8342-150195621925.png)
![screenshot2](https://user-images.githubusercontent.com/24596908/52550528-6e390e00-2e13-11e9-889f-86173aa74c9a.png)

## 安装

```bash
composer require wangxinyang001/adminlte3
php artisan vendor:publish --tag=adminlte
```

## 更新

```bash
composer update wangxinyang001/adminlte3
php artisan vendor:publish --tag=adminlte --force
```

## 配置

在`config/admin.php`文件的`extensions`，加上属于这个扩展的一些配置

```php
'extensions' => [
    'adminlte' => [
        'theme' => [
            /*
            |--------------------------------------------------------------------------
            |Navbar Theme
            |--------------------------------------------------------------------------
            |    "bg-primary", "bg-info", "bg-success", "bg-danger"
            |    "bg-warning", "bg-white", "bg-gray-light"
            */
            
            'navbar'    => 'bg-white',
            
            /*
            |--------------------------------------------------------------------------
            |Sidebar Theme
            |--------------------------------------------------------------------------
            |    "sidebar-dark-primary", "sidebar-dark-warning", "sidebar-dark-info", "sidebar-dark-danger", "sidebar-dark-success"
            |    "sidebar-light-primary", "sidebar-light-warning", "sidebar-light-info", "sidebar-light-danger", "sidebar-light-success"
            */
            
            'sidebar'   => 'sidebar-dark-primary',
            
            /*
            |--------------------------------------------------------------------------
            |LOGO Theme
            |--------------------------------------------------------------------------
            |    "bg-primary", "bg-info", "bg-success", "bg-danger"
            |    "bg-warning", "bg-white", "bg-gray-light"
            */
            
            'logo'      => ''
        ]
    ]
]
```

## 使用

**强制刷新**后查看效果

## 已知BUG
- editable 样式错乱

## 鸣谢

* [almasaeed2010/AdminLTE](https://github.com/almasaeed2010/AdminLTE)

* [pigzzz123/adminlte3](https://github.com/pigzzz123/adminlte3)

License
------------
Licensed under [The MIT License (MIT)](LICENSE).

