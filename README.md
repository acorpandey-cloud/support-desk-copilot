# support-desk-copilot

> **DRAFT from lesson P0-L06.** Rewrite the paragraph below in your own words, with your own test numbers and the failure you will count. Then delete this note. The P0 gate checks that it names a user, their current workaround, a countable failure and a runnable success test.

Problem: Maintainers of open-source projects triage every new GitHub issue
by hand. They read it, pick a label, ask for missing details and paste
links to docs that already answer it. When issues arrive faster than they
can read them, some get no reply at all, duplicates pile up, and questions
the docs already answer get answered again and again. support-desk-copilot
is a GitHub App: for each new issue it proposes a label and drafts a reply
that cites the project's own docs, or flags the issue for a maintainer when
the docs don't cover it. A maintainer approves every reply before it is
posted. It works when, on 100 closed issues that maintainers already
labelled, its proposed label matches theirs for at least 80, and every
drafted reply links to a docs page that exists.

Later: a second deployment for fintech support (refund, payment-failure
and KYC tickets).
