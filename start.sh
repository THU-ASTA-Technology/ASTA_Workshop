service nginx start
supervisord -c /etc/supervisord.conf
supervisorctl restart uwsgi