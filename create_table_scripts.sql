CREATE TABLE brand (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    logo VARCHAR(255),
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE genres (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE cluster (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    genres_id UUID REFERENCES genres(id),
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand_id UUID REFERENCES brand(id),
    quantity INT,
    images VARCHAR(255),
    cluster_id UUID REFERENCES cluster(id),
    price NUMERIC,
    detail TEXT,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone_number VARCHAR(20),
    is_verified_email BOOLEAN,
    refresh_token VARCHAR(255),
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE contact (
    id UUID PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone_number VARCHAR(20),
    email VARCHAR(255),
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE customer (
    id UUID PRIMARY KEY,
    contact_id UUID REFERENCES contact(id),
    debt NUMERIC,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE import_product (
    id UUID PRIMARY KEY,
    total_price NUMERIC,
    import_time TIMESTAMP,
    contact_id UUID REFERENCES contact(id),
    payment_account_number VARCHAR(255),
    payment_account_name VARCHAR(255),
    payment_account_bank_name VARCHAR(255),
    payment_method VARCHAR(255),
    is_complete_payment BOOLEAN,
    complete_payment_time TIMESTAMP,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE export_product (
    id UUID PRIMARY KEY,
    total_price NUMERIC,
    export_time TIMESTAMP,
    customer_id UUID REFERENCES customer(id),
    is_complete_payment BOOLEAN,
    complete_payment_time TIMESTAMP,
    created_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE import_product_item (
    import_id UUID REFERENCES import_product(id),
    product_id UUID REFERENCES product(id),
    PRIMARY KEY (import_id, product_id)
);

CREATE TABLE export_product_item (
    export_id UUID REFERENCES export_product(id),
    product_id UUID REFERENCES product(id),
    PRIMARY KEY (export_id, product_id)
);
