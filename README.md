
## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false,index: true,unique: true|

- has_many :messages
- has_many :members
- has_many :groups,through: :members


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|

- has_many :messages
- has_many :members
- has_many :users,through: :members


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text||
|image|string|null: true|
|group_id|references|null: false|
|user_id|references|null: false|

- belongs_to :user
- belongs_to :group


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

- belongs_to :group
- belongs_to :user



