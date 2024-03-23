package db

import (
	"cmp"
	"log/slog"
	"net"
	"os"
	"time"

	"github.com/go-sql-driver/mysql"
	"github.com/jmoiron/sqlx"
	_ "github.com/mattn/go-sqlite3"

	"github.com/tanimutomo/sqlfile"
)

var db *sqlx.DB

func SetUpDB() error {
	jst, err := time.LoadLocation("Asia/Tokyo")
	if err != nil {
		return err
	}
	host := cmp.Or(os.Getenv("NS_MARIADB_HOSTNAME"), "localhost")
	port := cmp.Or(os.Getenv("NS_MARIADB_PORT"), "3306")
	conf := mysql.Config{
		User:                 cmp.Or(os.Getenv("NS_MARIADB_USER"), "root"),
		Passwd:               cmp.Or(os.Getenv("NS_MARIADB_PASSWORD"), "password"),
		Net:                  "tcp",
		Addr:                 net.JoinHostPort(host, port),
		DBName:               cmp.Or(os.Getenv("NS_MARIADB_DATABASE"), "line_webhook"),
		Loc:                  jst,
		AllowNativePasswords: true,
		ParseTime:            true,
	}
	_db, err := sqlx.Connect("mysql", conf.FormatDSN())
	if err != nil {
		return err
	}
	if err := _db.Ping(); err != nil {
		return err
	}
	db = _db
	slog.Info("Connected to database")

	// ここで初期値の代入をする
	s := sqlfile.New()
	err = s.File("/app/db/schema.sql")
	if err != nil {
		slog.Error("Failed to open sql file: %v", err)
	}
	_, err = s.Exec(db.DB)
	if err != nil {
		slog.Error("Failed to initialize: %v", err)
	}
	return nil
}
