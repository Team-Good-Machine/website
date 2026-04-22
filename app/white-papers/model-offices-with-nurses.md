---
title: "Model offices with nurses: real software, real scenarios, repeated tasks"
summary: Cutting vaccination recording down to 3 clicks by testing live software in nurses’ own offices and school sessions.
tags:
  - manage-vaccinations-in-schools
eleventyNavigation:
  key: model-offices-with-nurses
  parent: manage-vaccinations-in-schools
---

## The problem

Vaccinating children in schools is fast, pressured, and full of distractions. Nurses are confirming identities, checking health questions, managing triage, and recording vaccinations, often for large numbers of children in a single session. The existing systems made them enter the same information repeatedly, which slowed them down and increased the chance of mistakes. We couldn't design our way out of that problem while sitting in an office.

## What we did

1. ### We brought the real software to nurses' actual offices

   Rather than building a prototype and testing it remotely, we ran model office sessions on site using the live Mavis application with synthetic data. Nurses could perform real recording tasks, repeatedly, with real operational data structures. Using a prototype would have masked the friction of the real thing.

2. ### Repetition revealed what one-off testing couldn't

   Because nurses could perform the same task multiple times, we saw where genuine inefficiency lived, not just what felt awkward the first time. That's how we identified that the injection site question was creating an unnecessary page, that vaccine batch details were being re-entered for every child, and that health question answers were hidden in a way that made nurses open them anyway, every time, just to be safe.

3. ### We observed actual school sessions

   Alongside model offices, we observed live vaccination sessions in schools. We watched nurses use Mavis alongside their existing systems. This is where we discovered that hiding health answers behind an expander didn't reduce cognitive load; it created extra work, because nurses opened them every time regardless.

4. ### Changes were targeted, then validated in the field

   Each insight from the model office led to a specific design change: injection site moved to the patient page, vaccine batch defaulted once per day, health answers shown by default rather than hidden. The pilot then revealed whether those changes held up under real session conditions, at volume.

## What it delivered

- 3 clicks to record most vaccinations, decreased from a multi-step journey
- 100% SAIS user satisfaction among teams on Mavis during private beta
- 66% of parents found Mavis easier to use than their previous consent form

> The game changer is the fact that we're loading all the kids in the nominal roll into the system. In Mavis, we can see them all in one place, and we're not cross-checking everything in two places.
>
> -- SAIS admin, staff survey

## Why this is important

Testing a prototype in a usability lab tells you whether people can figure out a design. Testing the live software in the environment where it will actually be used tells you whether it actually works.
