/*
Navicat PGSQL Data Transfer

Source Server         : PostgreSQL
Source Server Version : 90504
Source Host           : localhost:5432
Source Database       : support_project
Source Schema         : public

Target Server Type    : PGSQL
Target Server Version : 90200
File Encoding         : 65001

Date: 2018-04-16 22:09:28
*/


-- ----------------------------
-- Sequence structure for accounts_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "accounts_id_seq";
CREATE SEQUENCE "accounts_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

-- ----------------------------
-- Sequence structure for feed_backs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "feed_backs_id_seq";
CREATE SEQUENCE "feed_backs_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

-- ----------------------------
-- Sequence structure for info_supports_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "info_supports_id_seq";
CREATE SEQUENCE "info_supports_id_seq"
 INCREMENT 1
 MINVALUE 1
 MAXVALUE 9223372036854775807
 START 1
 CACHE 1;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS "accounts";
CREATE TABLE "accounts" (
"id" int4 DEFAULT nextval('accounts_id_seq'::regclass) NOT NULL,
"fullName" varchar(255) COLLATE "default",
"email" varchar(255) COLLATE "default",
"id_user" varchar(255) COLLATE "default",
"user_name" varchar(255) COLLATE "default",
"pass_word" varchar(255) COLLATE "default",
"phone_number" varchar(255) COLLATE "default",
"role" int4,
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of accounts
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for feed_backs
-- ----------------------------
DROP TABLE IF EXISTS "feed_backs";
CREATE TABLE "feed_backs" (
"id" int4 DEFAULT nextval('feed_backs_id_seq'::regclass) NOT NULL,
"fullName" varchar(255) COLLATE "default",
"email" varchar(255) COLLATE "default",
"title" varchar(255) COLLATE "default",
"message" varchar(255) COLLATE "default",
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of feed_backs
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for info_supports
-- ----------------------------
DROP TABLE IF EXISTS "info_supports";
CREATE TABLE "info_supports" (
"id" int4 DEFAULT nextval('info_supports_id_seq'::regclass) NOT NULL,
"fullName" varchar(255) COLLATE "default",
"title" varchar(255) COLLATE "default",
"address" varchar(255) COLLATE "default",
"description" varchar(255) COLLATE "default",
"path_img" varchar(255) COLLATE "default",
"status" int4,
"createdAt" timestamptz(6) NOT NULL,
"updatedAt" timestamptz(6) NOT NULL
)
WITH (OIDS=FALSE)

;

-- ----------------------------
-- Records of info_supports
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Alter Sequences Owned By 
-- ----------------------------
ALTER SEQUENCE "accounts_id_seq" OWNED BY "accounts"."id";
ALTER SEQUENCE "feed_backs_id_seq" OWNED BY "feed_backs"."id";
ALTER SEQUENCE "info_supports_id_seq" OWNED BY "info_supports"."id";

-- ----------------------------
-- Primary Key structure for table accounts
-- ----------------------------
ALTER TABLE "accounts" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table feed_backs
-- ----------------------------
ALTER TABLE "feed_backs" ADD PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table info_supports
-- ----------------------------
ALTER TABLE "info_supports" ADD PRIMARY KEY ("id");
