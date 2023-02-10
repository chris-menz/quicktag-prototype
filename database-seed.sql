SET timezone = 'America/New_York';

CREATE TABLE IF NOT EXISTS qrCodes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    isActivated BOOLEAN,
    timeStampActivated TIMESTAMPTZ,
    ownerEmail VARCHAR(100),
    ownerPhoneNumber VARCHAR(20),
    itemTracked VARCHAR(100),
    prefferedContactMethod VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS qrCodeScans (
    id SERIAL PRIMARY KEY,
    qrCodeId UUID references qrCodes(id),
    timeStampScanned TIMESTAMPTZ,
    messageSentToOwner TEXT,
    finderEmail VARCHAR(100),
    finderPhoneNumber VARCHAR(20),
    locationFound TEXT
);