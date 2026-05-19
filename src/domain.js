export const domain = {
    "kind": "calendar",
    "title": "Grant Deadline Radar Calendar",
    "purpose": "A purpose-built calendar interface for a simple open calendar system for tracking grant deadlines, owner tasks, and student deliverables.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Grant milestones",
    "metricLabels": [
        "Submission Readiness",
        "Deadline Risk",
        "Document Coverage"
    ],
    "fields": [
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Eastside Youth Arts Collective",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "grant submissions completed before deadline",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "start-date",
            "label": "Start date",
            "type": "date",
            "sample": "2026-03-10",
            "placeholder": "Enter start date"
        },
        {
            "id": "deadline-date",
            "label": "Deadline date",
            "type": "date",
            "sample": "2026-04-15",
            "placeholder": "Enter deadline date"
        },
        {
            "id": "cadence-days",
            "label": "Cadence days",
            "type": "number",
            "sample": 7,
            "placeholder": "Enter cadence days"
        },
        {
            "id": "review-buffer-days",
            "label": "Review buffer days",
            "type": "number",
            "sample": 3,
            "placeholder": "Enter review buffer days"
        }
    ],
    "rows": [
        "Grant deadline entered",
        "Draft due date generated",
        "Client docs due date generated",
        "Mentor review due date generated",
        "Final submit target set",
        "Owner assigned",
        "Reviewer assigned",
        "ICS calendar exported"
    ],
    "artifacts": [
        "ICS calendar",
        "Task CSV",
        "Submission readiness report"
    ],
    "checks": [
        "No milestone after funder deadline",
        "Owner and reviewer required",
        "Ready requires all required docs"
    ],
    "sampleClient": "Eastside Youth Arts Collective"
};
//# sourceMappingURL=domain.js.map