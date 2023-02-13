# 2022-2023 ASTA Winter Project
## 使用方法
### 本地调试
- 前端(yarn为例)
  - `cd web`进入web，执行`yarn install`安装依赖
  - 查看`web/src/config.js`里面的server是否为`http://localhost:8000/`
  - 在`web`目录下执行`yarn start`启动前端服务器
- 后端(django为例)
  - 在项目根目录执行`pip3 install -r requirements.txt`安装依赖
  - 查看`api/api/settings.py`中的`DEBUG`是否为`True`，这样django能返回错误信息以便调试
  - `cd api`进入`api`，在`api`目录下执行`python3 manage.py runserver`启动后端服务器
### 服务器部署
- 前端(yarn为例)
  - 修改`web/src/config.js`里面的server为服务器的ip
  - 在`web`目录下执行`yarn build`打包
  - 将`web/build`文件夹通过`scp`命令上传到服务器对应位置`workspace`
- 后端(django为例)
  - 在`api/api/settings.py`中涉及到前端的ip的位置添加服务器ip
  - 查看`api/api/settings.py`中的`DEBUG`是否为`False`
  - 查看`api/uwsgi.ini`的配置文件是否正确
  - 将`api`文件夹通过`scp`命令上传到服务器对应位置`workspace`
- docker(yarn和django为例)
  - 服务器已有镜像`project:1.0`，包含了部署所需的所有东西，使用`docker images`查看
  - 启动命令`docker run -itd -p <port1>:3000 -p <port2>:8000 -v <path to workspace>:/home/workspace --name <container name> project:1.0`，其中`port1`和`port2`为分配的两个端口，3000和8000参考Nginx中的配置
  - 进入容器命令`docker exec -it <container name> /bin/bash`
  - 进入容器后，查看并修改Nginx和supervisor配置，查看`/start.sh`是否正确
  - 在容器内执行`bash /start.sh`启动Nginx和uWSGI。若代码无误，在浏览器访问`http://<server ip>:<port1>`即可看到自己部署的网站
  - 日志请在容器中的`/var/log`中查看
## 验收细则
奖品请见[推送](https://mp.weixin.qq.com/s/BKhEWF5gK_yn76wJ1C8PgQ)
每人最多**两份奖品**
- 完成demo
  - 基础（1份）
    - 部署网站到服务器，通过浏览器能够访问到
    - 修改网站标题和logo（浏览器的标签页显示的那个）
    - 完善Profile的TODO，包括头像、姓名、ProfileSocial、ProfileItem
    - 完善NavBar的TODO，包括title
  - 进阶（1份）
    - 完善Blog的TODO，包括前端的Blog、BlockBlock、BlogDetail、BlogEdit、BlogList以及Home页面的Blog部分，后端的blog.py
    - 更好看的排版（optional）
- 自主项目（**选择这项的同学一定要先发邮件联系我们**）
  - 基础（1份）
    - 部署网站到服务器，通过浏览器能够访问到
    - 修改网站标题和logo（浏览器的标签页显示的那个）
  - 进阶（1份）
    - 完成网站的所有功能（不应过于简单，应该与demo有差不多的难度，起码得有前端路由吧doge。所以得先和我们交流）
    - 更好看的排版（optional）
