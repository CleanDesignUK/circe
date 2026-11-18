CREATE TABLE `circe_entries` (
	`owner` text NOT NULL,
	`id` text NOT NULL,
	`revision` integer NOT NULL,
	`payload` text NOT NULL,
	PRIMARY KEY(`owner`, `id`)
);
