-- CreateTable Person
CREATE TABLE "Person" (
    "id" TEXT PRIMARY KEY,
    "alias" TEXT NOT NULL,
    "approx_age_band" TEXT NOT NULL,
    "gender_opt" TEXT,
    "health_flags" JSONB,
    "photo_ref" TEXT,
    "guardian_id" TEXT,
    "issuing_org" TEXT NOT NULL,
    "consent_record" JSONB NOT NULL,
    "expires_at" TIMESTAMPTZ NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "schema_version" TEXT NOT NULL DEFAULT 'v1'
);

-- CreateTable Revocation
CREATE TABLE "Revocation" (
    "id" TEXT PRIMARY KEY,
    "person_id" TEXT NOT NULL REFERENCES "Person"("id") ON DELETE CASCADE,
    "reason" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX "Revocation_person_id_idx" ON "Revocation"("person_id");

-- CreateTable Audit
CREATE TABLE "Audit" (
    "id" TEXT PRIMARY KEY,
    "actor_id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "fields_changed" JSONB,
    "device_id" TEXT,
    "offline_txn_id" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    "person_id" TEXT,
    CONSTRAINT "Audit_person_id_fkey" FOREIGN KEY ("person_id") REFERENCES "Person"("id") ON DELETE SET NULL
);
CREATE INDEX "Audit_actor_id_idx" ON "Audit"("actor_id");
CREATE INDEX "Audit_person_id_idx" ON "Audit"("person_id");

