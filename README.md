AÑADIR LAS TABLAS RESPECTIVAS 

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    email character varying(255) COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    full_name character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.users
    OWNER to postgres;


CREATE TABLE IF NOT EXISTS public.producto
(
    id integer NOT NULL DEFAULT nextval('producto_id_seq'::regclass),
    nombre character varying(255) COLLATE pg_catalog."default" NOT NULL,
    tipo character varying(100) COLLATE pg_catalog."default" NOT NULL DEFAULT 'sierra'::character varying,
    cantidad integer NOT NULL,
    CONSTRAINT producto_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.producto
    OWNER to postgres;


DATO: Lo de pedido es una tabla exterior para probar el funcionamiento correcto del consumo de APIS, deben cambiar en .env el postgres al que están usando de maenra respectiva. Se puedne realizar pedidos de manera normal, si no has iniciado sesión NO puedes acceder a Development.

En development se deben consumir las APIs necesarias.
