FROM php:8.2-fpm

RUN apt-get update \
     && apt-get install -y build-essential linux-libc-dev \
     && docker-php-ext-install pdo pdo_mysql
RUN curl -sS https://getcomposer.org/installer​ | php -- \
     --install-dir=/usr/local/bin --filename=composer

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /app
COPY . .
RUN composer install --ignore-platform-reqs