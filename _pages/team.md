---
layout: page
title: team
permalink: /team/
description: Meet the researchers and engineers of Inter Science.
nav: true
nav_order: 3
---

{% assign sorted_people = site.people | sort: "order" %}

<div class="team-page-grid">
  {% for person in sorted_people %}
    <div class="team-page-card">
      <div class="team-page-card-top">
        <div class="team-page-avatar">
          {% if person.photo %}
            <img src="{{ person.photo | relative_url }}" alt="{{ person.title }}" />
          {% else %}
            {{ person.title | split: " " | first | slice: 0 }}{{ person.title | split: " " | last | slice: 0 }}
          {% endif %}
        </div>
        <div class="team-page-name">{{ person.title }}</div>
        <div class="team-page-role">{{ person.role }}</div>
      </div>
      <div class="team-page-card-body">
        <p class="team-page-bio">{{ person.short_bio }}</p>
        {% if person.research_areas %}
          <div class="team-page-areas">
            {% for area in person.research_areas %}
              <span class="area-pill">{{ area }}</span>
            {% endfor %}
          </div>
        {% endif %}
        <div class="team-page-links">
          {% if person.github %}
            <a href="https://github.com/{{ person.github }}" target="_blank" rel="noopener" title="GitHub">
              <i class="fa-brands fa-github"></i>
            </a>
          {% endif %}
          {% if person.linkedin %}
            <a href="https://linkedin.com/in/{{ person.linkedin }}" target="_blank" rel="noopener" title="LinkedIn">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          {% endif %}
          {% if person.website %}
            <a href="{{ person.website }}" target="_blank" rel="noopener" title="Website">
              <i class="fa-solid fa-globe"></i>
            </a>
          {% endif %}
          {% if person.email %}
            <a href="mailto:{{ person.email }}" title="Email">
              <i class="fa-solid fa-envelope"></i>
            </a>
          {% endif %}
          {% if person.orcid_id %}
            <a href="https://orcid.org/{{ person.orcid_id }}" target="_blank" rel="noopener" title="ORCID">
              <i class="ai ai-orcid"></i>
            </a>
          {% endif %}
          <a href="{{ person.url | relative_url }}" class="btn-profile">Profile →</a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>
