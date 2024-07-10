LocalHost : http://localhost:16543/
EMAIL: squadprata@admin.com
PASSWORD: admin


SQL

DATABASE: squadprata

create table users(
	id bigint,
	nome varchar (50) not null
)

insert into users (id, nome) values (1, 'Lucas')
insert into users (id, nome) values (2, 'Carlos')

select * from users
