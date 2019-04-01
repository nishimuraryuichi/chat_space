
##usersテーブル

|column|type|options|
|name|text|null: false|

has_many   :groups
belongs_to :user


##groupsテーブル

|name|text|null: false|

has_many   :users
belongs_to :group


##messagesテーブル

|column|type|opitin|
|body|text|null: false|
|image|string|null: true|
|group_id|integer|null: false|
|user_id|integer|null: false|

has_many   :users
has_many   :groups


## membersテーブル

|column|type|options|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

belongs_to :group
belongs_to :user





# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
