---
title: Making school vaccination consent work for everyone
summary: How user research with hard-to-reach groups shaped the vaccination consent service from the start
tags:
  - manage-vaccinations-in-schools
eleventyNavigation:
  key: school-vaccination-consent
  parent: manage-vaccinations-in-schools
---

When we built Mavis, the digital service for school-age vaccination consent, we tested it with people who typically struggle with digital services. The findings changed how we designed it and got us to full WCAG 2.2 AA compliance with zero critical or high severity issues. We met all points of the NHS Service Standard at beta.

## Who we tested with

Between March and September 2024, we ran face-to-face usability testing with 34 parents across England. We worked with Smartlyte, a Birmingham organisation that increases digital inclusion in communities, to reach people often missed in research.

We tested with parents across all four categories of access needs: 12 with visual impairments (using screen readers like JAWS and magnifiers like ZoomText), 5 with cognitive needs (dyslexia, autism, traumatic brain injury), 2 with motor impairments, and 2 BSL users. We also included 3 parents with low digital confidence, 4 vaccine-hesitant parents, and 3 with English as an additional language.

Testing happened in Middlesbrough, Eastbourne, Bristol, Leeds, Birmingham and London. Sessions ran 60-90 minutes, covering the full consent journey from invitation email through to confirmation.

## What we found

Parents couldn't find the consent link in emails. This came up repeatedly. One parent with a visual impairment said: "It's not clear where to give consent. A bit of a blue background would stand out more."

The information order was wrong. Parents wanted vaccine information first, then got confused navigating back to consent. One said: "It's almost as though they are trying to trick you into consent before giving all the information."

Parents expected pre-populated data. For people with motor impairments, typing takes time. Several couldn't remember their GP surgery name. They wanted dropdowns, not free text.

Contact preferences made no sense. Screen reader users wanted to say they had no specific needs but had to listen through every option first.

Vaccine-hesitant parents hit dead ends. Parents with religious concerns about gelatine in vaccines found the pathway didn't work. One explained: "I called the GP for a flu jab but they said they didn't give it. It's really sad, they should understand there are lots of religions who can't have it."

Medical language blocked parents learning English. They needed information in their first languages. This would help dyslexic users too.

## What we changed

We redesigned the email, turning the consent link into a button and moving it after vaccine information. This fixed usability problems and met WCAG 2.2 requirements for clear focus and predictable navigation.

We deleted the GP surgery question completely. We didn't need it and it was causing problems.

We rebuilt contact preferences as a dedicated page: "Do you have any communication needs?" with an example like "I have trouble hearing so prefer text messages whenever possible." No more confusing conditional questions.

We added links to GOV.UK with vaccine information in multiple languages, BSL and Braille.
For vaccine-hesitant parents, we added proper options. Parents can now agree to the nasal spray, agree to an injected alternative (for religious or medical reasons), or refuse. It's not just yes or no anymore.

We used plain English. "The children's flu vaccine helps protect children against flu. Vaccinating children also protects others who are vulnerable to flu, such as babies and older people."

We fixed screen reader bugs as we found them - radio buttons, focus management, all tested against WCAG 2.2 AA.

## Results

The service passed WCAG 2.2 AA testing with zero critical or high severity issues across 14 pages. It met all NHS Service Standard points at beta.

Parents with low digital confidence managed the journey: "Overall a lot easier and quicker than paper as I can use Google Translate."

Parents with access needs liked the approach: "It felt common sense, straight down the line."

Digital worked better for some needs: "'Online' has benefits for users with dyslexia and those learning English due to translation/text to voice tools."

## Why this matters

We tested throughout with users who have real access needs. We made changes based on what they told us. The accessibility audit confirmed what users had already shown us.

Working with Smartlyte got us to people who genuinely need accessible services. The numbers prove it: when you do inclusive research with hard-to-reach groups properly, you build something that passes the technical standards because you've already made it work for real people.
