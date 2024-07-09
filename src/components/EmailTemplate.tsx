import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export const EmailTemplate = ({
    name,
    email,
    message
}: EmailTemplateProps) => (
    <div>
        <h1>Welcome, {name}!</h1>
    </div>
);
