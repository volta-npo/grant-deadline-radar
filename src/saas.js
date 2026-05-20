export const saas = {
    "productName": "Grant Deadline Radar",
    "category": "Finance & Grants",
    "northStar": "grant submissions completed before funder deadline",
    "segments": [
        "Grant writers",
        "Finance pods",
        "Nonprofit operations teams",
        "Program managers"
    ],
    "jobs": [
        "Convert grant deadlines into backwards-planned milestone calendars",
        "Assign owner, reviewer, and client document tasks",
        "Surface schedule risk before applications slip",
        "Export calendar and task packets"
    ],
    "plans": [
        {
            "name": "Community",
            "price": "Free",
            "promise": "Single grant calendar and task export"
        },
        {
            "name": "Ops",
            "price": "39/mo",
            "promise": "Multi-grant radar, risk scoring, reminders"
        },
        {
            "name": "Chapter",
            "price": "169/mo",
            "promise": "Reviewer queues, owner dashboards, document SLAs"
        },
        {
            "name": "Portfolio",
            "price": "Custom",
            "promise": "Organization-wide funding calendar governance"
        }
    ],
    "metrics": [
        {
            "label": "Submissions on track",
            "current": 9,
            "target": 12,
            "note": "Applications with no overdue critical tasks"
        },
        {
            "label": "Document coverage",
            "current": 71,
            "target": 95,
            "note": "Required client documents received"
        },
        {
            "label": "Reviewer SLA",
            "current": 83,
            "target": 95,
            "note": "Reviews completed before buffer date"
        },
        {
            "label": "Deadline risk reduced",
            "current": 68,
            "target": 90,
            "note": "At-risk milestones remediated"
        }
    ],
    "playbooks": [
        "Funder deadline intake",
        "Backward milestone planning",
        "Document request sprint",
        "Reviewer queue management",
        "Submission readiness review"
    ],
    "integrations": [
        "Google/Outlook calendar export",
        "ICS subscription feed",
        "Slack/email reminders",
        "Google Drive doc tracker",
        "Asana/Trello task export"
    ],
    "controls": [
        "No milestone can be after funder deadline",
        "Owner and reviewer are required for ready status",
        "Critical tasks require buffer days",
        "Submission export includes risk notes"
    ],
    "roadmap": [
        "Recurring deadline radar",
        "Reminder automation engine",
        "Document request portal",
        "Reviewer capacity planning",
        "Grant calendar analytics"
    ],
    "personas": [
        {
            "name": "Grant operations lead",
            "role": "Owns grant calendar and submission readiness",
            "pain": "Deadlines and document tasks live in separate tools",
            "success": "Every grant has milestone owners and risk status",
            "activation": "Create first radar record"
        },
        {
            "name": "Reviewer",
            "role": "Approves drafts, budgets, and attachments",
            "pain": "Review windows are too late or unclear",
            "success": "Sees queue, due dates, and missing approvals",
            "activation": "Open reviewer queue"
        },
        {
            "name": "Executive sponsor",
            "role": "Needs confidence that submissions will not slip",
            "pain": "Status reports hide deadline risk until too late",
            "success": "Gets concise risk digest and readiness score",
            "activation": "Export deadline risk brief"
        }
    ],
    "journeys": [
        {
            "stage": "Deadline intake",
            "moment": "Capture due date, funder, submission method, and timezone",
            "success": "Deadline has owner and source evidence",
            "automation": "Calendar/import parser"
        },
        {
            "stage": "Milestone planning",
            "moment": "Generate LOI, narrative, budget, attachments, and approval milestones",
            "success": "Milestones lead deadline with buffer",
            "automation": "Template milestone generator"
        },
        {
            "stage": "Document chase",
            "moment": "Track attachments and signatures",
            "success": "Missing docs have owners and due dates",
            "automation": "Checklist reminders"
        },
        {
            "stage": "Review queue",
            "moment": "Route drafts through reviewer approvals",
            "success": "Review completed before final buffer date",
            "automation": "Reviewer notifications"
        },
        {
            "stage": "Submission handoff",
            "moment": "Package final readiness and post-submit proof",
            "success": "Submission proof is stored and client-safe",
            "automation": "Readiness packet export"
        }
    ],
    "features": [
        {
            "name": "Grant calendar radar",
            "tier": "Community",
            "description": "Deadline, timezone, and submission method tracking",
            "evidence": "Every date includes source and owner"
        },
        {
            "name": "Milestone dependency engine",
            "tier": "Team",
            "description": "Backward-planned tasks with buffers and dependency risk",
            "evidence": "Blocked milestones explain upstream dependency"
        },
        {
            "name": "Document checklist vault",
            "tier": "Team",
            "description": "Attachment, signature, and renewal tracker",
            "evidence": "Each missing doc has accountable owner"
        },
        {
            "name": "Reviewer queue and SLA board",
            "tier": "Chapter",
            "description": "Review routing with due dates and approval status",
            "evidence": "Reviewer approvals captured before export"
        },
        {
            "name": "ICS and reminder exports",
            "tier": "Chapter",
            "description": "Calendar-ready deadline and milestone exports",
            "evidence": "Exports include timezone and reminder metadata"
        },
        {
            "name": "Executive risk digest",
            "tier": "Network",
            "description": "Portfolio-level at-risk grants and readiness trend",
            "evidence": "Digest explains risk drivers and next actions"
        }
    ],
    "experiments": [
        {
            "hypothesis": "Backward planning reduces late review requests",
            "measure": "Review buffer compliance",
            "target": "90% reviews before buffer date",
            "cadence": "weekly"
        },
        {
            "hypothesis": "Document reminders reduce attachment blockers",
            "measure": "Missing documents closed",
            "target": "95% closed before final week",
            "cadence": "weekly"
        },
        {
            "hypothesis": "Risk digests improve executive intervention",
            "measure": "At-risk submissions rescued",
            "target": "80% rescued",
            "cadence": "monthly"
        },
        {
            "hypothesis": "ICS exports increase milestone visibility",
            "measure": "On-time milestones",
            "target": "95% on time",
            "cadence": "per deadline"
        }
    ],
    "risks": [
        {
            "risk": "Wrong timezone causes missed submission",
            "mitigation": "Timezone field and source evidence required",
            "owner": "Grant operations lead",
            "severity": "high"
        },
        {
            "risk": "Reviewer approval happens after submission buffer",
            "mitigation": "SLA board and escalation reminders",
            "owner": "Reviewer lead",
            "severity": "high"
        },
        {
            "risk": "Missing documents discovered too late",
            "mitigation": "Dependency checklist and owner assignments",
            "owner": "Document owner",
            "severity": "high"
        },
        {
            "risk": "Calendar exports omit sensitive context controls",
            "mitigation": "Client-safe ICS labels and private notes separation",
            "owner": "Operations lead",
            "severity": "medium"
        }
    ],
    "automations": [
        {
            "name": "Milestone generator",
            "trigger": "New grant deadline created",
            "action": "Create backward-planned milestone checklist",
            "owner": "Grant operations lead"
        },
        {
            "name": "Reviewer SLA alert",
            "trigger": "Review due within 48 hours",
            "action": "Notify reviewer and operations lead",
            "owner": "Reviewer lead"
        },
        {
            "name": "Document blocker escalation",
            "trigger": "Attachment remains missing near buffer date",
            "action": "Flag grant as at-risk and assign next action",
            "owner": "Document owner"
        },
        {
            "name": "Calendar export builder",
            "trigger": "Milestones approved",
            "action": "Generate ICS/CSV deadline packet",
            "owner": "Operations lead"
        }
    ],
    "dashboards": [
        {
            "name": "Deadline radar",
            "audience": "Grant ops",
            "widgets": [
                "Upcoming deadlines",
                "At-risk grants",
                "Milestone completion",
                "Submission buffers"
            ]
        },
        {
            "name": "Reviewer queue",
            "audience": "Reviewers",
            "widgets": [
                "Drafts waiting",
                "SLA risk",
                "Approval status",
                "Blocking comments"
            ]
        },
        {
            "name": "Executive grant risk",
            "audience": "Leadership",
            "widgets": [
                "Portfolio readiness",
                "Critical blockers",
                "Rescue actions",
                "Submitted proof"
            ]
        }
    ],
    "templates": [
        {
            "name": "Deadline risk brief",
            "format": "Markdown",
            "sections": [
                "At-risk grants",
                "Blockers",
                "Owner actions",
                "Submission buffer"
            ]
        },
        {
            "name": "Milestone calendar export",
            "format": "CSV",
            "sections": [
                "Grant",
                "Milestone",
                "Owner",
                "Due date",
                "Dependency",
                "Status"
            ]
        },
        {
            "name": "Reviewer agenda",
            "format": "Markdown",
            "sections": [
                "Drafts due",
                "Approvals needed",
                "Comments blocking",
                "Escalations"
            ]
        }
    ]
};
//# sourceMappingURL=saas.js.map