export const config = {
    "number": 12,
    "slug": "grant-deadline-radar",
    "title": "Grant Deadline Radar",
    "category": "Finance & Grants",
    "tagline": "A simple open calendar system for tracking grant deadlines, owner tasks, and student deliverables.",
    "persona": "Finance pods managing multiple grant applications.",
    "gap": "Missed deadlines are common when teams rely on spreadsheets and scattered reminders.",
    "niche": "Student-led grant writing operations.",
    "metric": "grant submissions completed before deadline",
    "modules": [
        "Deadline calendar",
        "Document request checklist",
        "Reviewer queue",
        "Submission readiness states"
    ],
    "theme": {
        "accent": "#16a34a",
        "accent2": "#86efac",
        "emoji": "\ud83d\udcb8",
        "metricLabel": "Funding readiness",
        "workflow": [
            "Collect verified facts",
            "Map requirements to evidence",
            "Score readiness",
            "Export funder-ready packet"
        ],
        "privacy": "Financial and grant materials can be sensitive. Keep exports local and label confidential notes."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "deadline-calendar",
            "label": "Deadline calendar",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify deadline calendar with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "document-request-checklist",
            "label": "Document request checklist",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify document request checklist with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "reviewer-queue",
            "label": "Reviewer queue",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify reviewer queue with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "submission-readiness-states",
            "label": "Submission readiness states",
            "weight": 15,
            "defaultStatus": "not-started",
            "prompt": "Implement and verify submission readiness states with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "prompt": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Grant Deadline Radar and capture baseline evidence.",
            "Complete the deadline calendar workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Eastside Youth Arts Collective",
        "chapter": "NYC",
        "studentLead": "Volta Student Lead",
        "notes": "Grant and finance readiness project for a small community nonprofit. Grant Deadline Radar sample.",
        "evidencePrefix": "Grant Deadline Radar",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map