<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_db' );

/** Database username */
define( 'DB_USER', 'wp_user' );

/** Database password */
define( 'DB_PASSWORD', 'admin' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`i5SCWEM9<o#z@4+,99[.NV eeAeXJPKiz}Y3##UBp|%JV0+{iM^lw;Zx7[|FZ|)' );
define( 'SECURE_AUTH_KEY',  '8UN5b7)<.VBBe0,YGV4w*s9w.89pT8s(p1o:Mt%$^i*$M||2/zatI&]KxlN,Ldg3' );
define( 'LOGGED_IN_KEY',    'y;,b+rz]3m{&%ZH43|gxC<n)yaoAJBNm]mBN$+^7LsBoxp~#j-j:)(q^4s8|Bs1i' );
define( 'NONCE_KEY',        '@:IkB]lnl9Sr]7PN#|tLX&xjG,S0%Hla<-T=)ZZ,/*VT:].EY5V-;+uyB)~?dU`7' );
define( 'AUTH_SALT',        '*>g)Bs%fHDRg!`$gPkd2#yf=jt2t*w/Yg-Ra#[}y:>S<) B@]Bm0ORXG4ReVu5S#' );
define( 'SECURE_AUTH_SALT', 'CZk>z_C [qc^V>D;30cLcT-E.wzXn@;gm])EO`F3B^6K8v*Z8($[NF-hS2GIC^2(' );
define( 'LOGGED_IN_SALT',   'bo?^m5Sz85f__>OlGOsjpj}GY@~,H&mIN1I8RW::pE^bLW;HzMl.Ya^3Hjl5S_i(' );
define( 'NONCE_SALT',       'TU#<8)<Jr4_)y4Zgh`65Ix&2TP8!^gA1A`X5(i~u6.^piBvya?VFhxlyt%/2!@=N' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
