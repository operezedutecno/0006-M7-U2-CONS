CREATE TABLE public.prendas (
	id serial4 NOT NULL,
	nombre varchar NOT NULL,
	color varchar NOT NULL,
	CONSTRAINT prendas_nombre_color_key UNIQUE (nombre, color),
	CONSTRAINT prendas_pkey PRIMARY KEY (id)
);

INSERT INTO public.prendas
(nombre, color)
VALUES('Polera', 'Rojo');
INSERT INTO public.prendas
(nombre, color)
VALUES('Polera', 'Azul');
INSERT INTO public.prendas
(nombre, color)
VALUES('Polera', 'Amarillo');
INSERT INTO public.prendas
(nombre, color)
VALUES('Abrigo', 'Azul Marino');
INSERT INTO public.prendas
(nombre, color)
VALUES('Abrigo', 'Gris');
INSERT INTO public.prendas
(nombre, color)
VALUES('Pantalón', 'Azul');
INSERT INTO public.prendas
(nombre, color)
VALUES('Pantalón', 'Negro');
INSERT INTO public.prendas
(nombre, color)
VALUES('Pantalón', 'Rojo');
